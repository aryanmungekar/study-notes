// ✅ subject-loader.js – for subject-specific pages (like 1000.md)

const categories = {
  notes: "📝 Notes",
  pyq: "📄 PYQ",
  solved_pyq: "✅ Solved PYQ",
  uploads: "📄 Uploads"
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

function loadPDFs(subjectCode, category, allData) {
  const grid = document.getElementById(category + "Grid");
  if (!grid) return;
  grid.innerHTML = "";

  const subject = allData[subjectCode];
  const items = subject[category] || [];

  if (items.length === 0) {
    grid.innerHTML = `<p>No PDFs available in ${categories[category]}.</p>`;
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "pdf-card";

    const isDownloaded = localStorage.getItem(item.url) === "downloaded";
    const offlineUrl = `/assets/load/viewer.html?offline=${btoa(item.url)}`;
    const onlineUrl = `/assets/load/viewer.html?file=${encodeURIComponent(
      item.url
    )}&title=${encodeURIComponent(item.title)}&subject=${encodeURIComponent(
      subject.name
    )}`;

    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <h4>${item.title}</h4>
      <p>${item.subtitle}</p>
      <p>${item.exam}</p>
      <a href="${isDownloaded ? offlineUrl : onlineUrl}" target="_blank">
        ${isDownloaded ? "✅ Open Offline" : "View PDF"}
      </a>
      <div class="share-group">
        <button class="download-btn" data-url="${item.url}" title="Download">
          <i class="fas ${isDownloaded ? "fa-check" : "fa-download"}"></i>
        </button>
        <button class="share-btn" data-url="${onlineUrl}" title="Copy Link">
          <i class="fas fa-link"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  setupShareButtons();
  setupDownloadButtons();
}

function setupShareButtons() {
  document.querySelectorAll(".share-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const shareUrl = window.location.origin + btn.getAttribute("data-url");
      if (navigator.share) {
        navigator
          .share({ title: "SPPU Notes", url: shareUrl })
          .catch(console.error);
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
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const req = indexedDB.open("offlineMDStore", 1);
          req.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction("mdfiles", "readwrite");
            tx.objectStore("mdfiles").put(text, url);
            localStorage.setItem(url, "downloaded");
            btn.innerHTML = '<i class="fas fa-check"></i>';
          };
        });
    });
  });
}

// ✅ IndexedDB setup
const dbRequest = indexedDB.open("offlineMDStore", 1);
dbRequest.onupgradeneeded = function (e) {
  const db = e.target.result;
  db.createObjectStore("mdfiles");
};
