// ✅ subject-loader.js – for subject-specific pages (like 1000.md)

const categories = {
    notes: "📝 Notes",
    pyq: "📄 PYQ",
    solved_pyq: "✅ Solved PYQ",
    uploads: "📤 Uploads"
};

const headerBar = document.getElementById("headerBar");
const initialButtonsDiv = document.getElementById("initialButtons"); // Optional (can be hidden)

const subjectCode = window.location.pathname.match(/(\d{4})\/?$/)?.[1]; // e.g., '1000'

if (subjectCode) {
    fetch('./new-pdf-data.json')
        .then(res => res.json())
        .then(data => {
            const subject = data[subjectCode];
            if (!subject) {
                document.getElementById("contentArea").innerHTML = `<p>Subject not found.</p>`;
                return;
            }

            // Create category buttons
            headerBar.style.display = "flex";
            for (const key in categories) {
                createButton(key, categories[key], headerBar, () => showCategoryContent(subjectCode, key, data));
            }

            // Optionally load default category
            showCategoryContent(subjectCode, "notes", data);
        })
        .catch(err => console.error("Error loading subject:", err));
}

function createButton(id, label, parent, handler) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = "category-button";
    btn.onclick = handler;
    parent.appendChild(btn);
}

function showCategoryContent(subjectCode, category, data) {
    document.querySelectorAll(".content-section").forEach(div => {
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
    const grid = document.getElementById(category + 'Grid');
    if (!grid) return;

    grid.innerHTML = "";

    const subject = allData[subjectCode];
    const items = subject[category] || [];

    if (items.length === 0) {
        grid.innerHTML = `<p>No PDFs available in ${categories[category]}.</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'pdf-card';
        const shareLink = `/assets/load/viewer.html?file=${encodeURIComponent(item.url)}&title=${encodeURIComponent(item.title)}&subject=${encodeURIComponent(subject.name)}`;



        card.innerHTML = `
  <img src="${item.thumbnail}" alt="${item.title}">
  <h4>${item.title}</h4>
  <p>${item.subtitle}</p>
  <p>${item.exam}</p>
  <a href="${shareLink}" target="_blank"><i class="fa-solid fa-book"></i>Open PDF</a>
  <div class="share-group">
    <button class="share-btn" data-url="${shareLink}" title="Share Link">
      <i class="fa-solid fa-arrow-up-from-bracket"></i>
    </button>
  </div>
`;



        grid.appendChild(card);
    });

    // ✅ Add click listeners after DOM update
    grid.querySelectorAll(".share-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const shareUrl = window.location.origin + btn.getAttribute("data-url");

            if (navigator.share) {
                navigator.share({
                    title: "Check this PDF on SPPU Notes",
                    text: "Useful note/PYQ from SPPU Notes:",
                    url: shareUrl
                }).catch(err => console.error("Sharing failed:", err));
            } else {
                navigator.clipboard.writeText(shareUrl)
                    .then(() => alert("Link copied to clipboard!"))
                    .catch(() => alert("Failed to copy link"));
            }
        });
    });
}

