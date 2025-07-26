// ✅ subject-loader.js – for subject-specific pages (like 1000.md)

const categories = {
  notes: "📝 Notes",
  pyq: "📄 PYQ",
  solved_pyq: "✅ Solved PYQ",
  uploads: "📤 Uploads"
};

const headerBar = document.getElementById("headerBar");
const initialButtonsDiv = document.getElementById("initialButtons");
const subjectCode = window.location.pathname.match(/(\d{4})\/?$/)?.[1];

if (subjectCode) {
  fetch("./new-pdf-data.json")
    .then((res) => res.json())
    .then((data) => {
      const subject = data[subjectCode];
      if (!subject) {
        document.getElementById("contentArea").innerHTML = `<p>Subject not found.</p>`;
        return;
      }

      headerBar.style.display = "flex";
      for (const key in categories) {
        createButton(key, categories[key], headerBar, () =>
          showCategoryContent(subjectCode, key, data)
        );
      }

      showCategoryContent(subjectCode, "notes", data);
    })
    .catch((err) => console.error("Error loading subject:", err));
}

function createButton(id, label, parent, handler) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = "category-button";
  btn.onclick = handler;
  parent.appendChild(btn);
}

function showCategoryContent(subjectCode, category, data) {
  document.querySelectorAll(".content-section").forEach((div) => {
    div.style.display = "none";
    div.classList.remove("slide-in");
  });

  const section = document.getElementById(category);
  if (!section) return;

  section.style.display = "block";
  section.classList.add("slide-in");
  loadPDFs(subjectCode, category, data);
}

async function loadPDFs(subjectCode, category, allData) {
  const grid = document.getElementById(category + "Grid");
  if (!grid) return;
  grid.innerHTML = "";

  const subject = allData[subjectCode];
  const items = subject[category] || [];

  if (items.length === 0) {
    grid.innerHTML = `<p>No PDFs available in ${categories[category]}.</p>`;
    return;
  }

  const db = await getDB();

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "pdf-card";

    const isDownloaded = await checkFileDownloaded(db, item.url);
    const offlineUrl = `/assets/load/viewer.html?offline=${encodeBase64(item.url)}`;
    const onlineUrl = `/assets/load/viewer.html?file=${encodeURIComponent(item.url)}&title=${encodeURIComponent(item.title)}&subject=${encodeURIComponent(subject.name)}`;

    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <h4>${item.title}</h4>
      <p>${item.subtitle}</p>
      <p>${item.exam}</p>
      <a href="${isDownloaded ? offlineUrl : onlineUrl}" target="_blank" class="view-link">
        ${isDownloaded ? "✅ Open Offline" : "View PDF"}
      </a>
      <div class="share-group">
        <button class="download-btn" data-url="${item.url}" title="Download">
          <i class="fas ${isDownloaded ? "fa-check-circle" : "fa-download"}"></i>
        </button>
        ${isDownloaded ? `
          <button class="delete-btn" data-url="${item.url}" title="Delete Offline File">
            <i class="fas fa-trash-alt"></i>
          </button>
        ` : ""}
        <button class="share-btn" data-url="${onlineUrl}" title="Copy Link">
          <i class="fas fa-link"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  }

  setupShareButtons();
  setupDownloadButtons();
  setupDeleteButtons();
}

function encodeBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function setupShareButtons() {
  document.querySelectorAll(".share-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const shareUrl = window.location.origin + btn.getAttribute("data-url");
      if (navigator.share) {
        navigator.share({ title: "SPPU Notes", url: shareUrl }).catch(console.error);
      } else {
        navigator.clipboard
          .writeText(shareUrl)
          .then(() => alert("Link copied!"))
          .catch(() => alert("Failed to copy link"));
      }
    });
  });
}

function setupDownloadButtons() {
  document.querySelectorAll(".download-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const url = btn.getAttribute("data-url");
      const card = btn.closest(".pdf-card");
      const viewLink = card.querySelector(".view-link");

      if (!isRunningAsPWA()) {
        showToast("⚠️ Download works, but offline use needs app installation");
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          showToast("❌ Failed to fetch file");
          return;
        }

        const blob = await response.blob();

        const db = await getDB();
        const tx = db.transaction("mdfiles", "readwrite");
        tx.objectStore("mdfiles").put(blob, url);
        localStorage.setItem(url, "downloaded");

        btn.innerHTML = `<i class="fas fa-check-circle"></i>`;
        viewLink.href = `/assets/load/viewer.html?offline=${encodeBase64(url)}`;
        viewLink.innerText = "✅ Open Offline";

        if (!card.querySelector(".delete-btn")) {
          const deleteBtn = document.createElement("button");
          deleteBtn.className = "delete-btn";
          deleteBtn.setAttribute("data-url", url);
          deleteBtn.setAttribute("title", "Delete Offline File");
          deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
          card.querySelector(".share-group").insertBefore(deleteBtn, card.querySelector(".share-btn"));
          setupDeleteButtons();
        }

        showToast("✅ File cached for offline use");
      } catch (err) {
        console.error(err);
        showToast("❌ Error saving file");
      }
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = `
      position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
      background: #333; color: white; padding: 10px 20px; border-radius: 8px;
      font-size: 14px; z-index: 9999; display: none;
    `;
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

function isRunningAsPWA() {
  return window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true
    || document.referrer.startsWith("android-app://");
}

function getDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("offlineMDStore", 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      db.createObjectStore("mdfiles");
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function checkFileDownloaded(db, url) {
  return new Promise((resolve) => {
    const tx = db.transaction("mdfiles", "readonly");
    const store = tx.objectStore("mdfiles");
    const request = store.get(url);
    request.onsuccess = () => resolve(!!request.result);
    request.onerror = () => resolve(false);
  });
}

function setupDeleteButtons() {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const url = btn.getAttribute("data-url");
      const card = btn.closest(".pdf-card");
      const db = await getDB();

      const tx = db.transaction("mdfiles", "readwrite");
      tx.objectStore("mdfiles").delete(url);
      localStorage.removeItem(url);

      showToast("🗑️ File deleted from offline storage");

      const viewLink = card.querySelector(".view-link");
      const subjectName = new URLSearchParams(viewLink.href.split("?")[1]).get("subject");
      const fileUrl = new URLSearchParams(viewLink.href.split("?")[1]).get("file");

      viewLink.href = `/assets/load/viewer.html?file=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(card.querySelector("h4").innerText)}&subject=${encodeURIComponent(subjectName)}`;
      viewLink.innerText = "View PDF";

      btn.remove();

      const downloadBtn = card.querySelector(".download-btn i");
      if (downloadBtn) downloadBtn.className = "fas fa-download";
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const offlineParam = params.get("offline");
  const fileParam = params.get("file");

  if (offlineParam) {
    const key = atob(offlineParam);
    loadOfflineFile(key);
  } else if (fileParam) {
    showPDF(fileParam);
  } else {
    document.body.innerHTML = "<p>❌ No file specified.</p>";
  }
});

async function loadOfflineFile(key) {
  try {
    const db = await getDB();
    const tx = db.transaction("mdfiles", "readonly");
    const store = tx.objectStore("mdfiles");
    const request = store.get(key);

    request.onsuccess = () => {
      const blob = request.result;
      if (blob) {
        const blobUrl = URL.createObjectURL(blob);
        showPDF(blobUrl);
      } else {
        document.body.innerHTML = "<p>⚠️ File not found in offline storage.</p>";
      }
    };

    request.onerror = () => {
      document.body.innerHTML = "<p>❌ Failed to read from offline storage.</p>";
    };
  } catch (err) {
    console.error(err);
    document.body.innerHTML = "<p>❌ Error loading offline file.</p>";
  }
}


function showPDF(url) {
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = "100vh";
  iframe.style.border = "none";
  document.body.innerHTML = "";
  document.body.appendChild(iframe);
}
