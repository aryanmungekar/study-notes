const categories = {
    notes: "📝 Notes",
    pyq: "📄 PYQ",
    solved_pyq: "✅ Solved PYQ",
    uploads: "📤 Uploads"
};

const headerBar = document.getElementById("headerBar");
const initialButtonsDiv = document.getElementById("initialButtons");

// Get subject code from last part of path (without extension), lowercase for matching
const subjectCode = window.location.pathname
    .replace(/\/+$/, '') // remove trailing slash
    .split('/').pop()    // get last segment
    .replace(/\.[^/.]+$/, '') // remove extension if any
    .trim().toLowerCase();

if (subjectCode) {
    fetch('./new-pdf-data.json')
        .then(res => res.json())
        .then(data => {
            // Make all keys lowercase for case-insensitive match
            const lowerKeyMap = {};
            for (const key in data) {
                lowerKeyMap[key.toLowerCase()] = data[key];
            }

            const subject = lowerKeyMap[subjectCode];
            if (!subject) {
                document.getElementById("contentArea").innerHTML = `<p>Subject not found.</p>`;
                return;
            }

            headerBar.style.display = "flex";
            for (const key in categories) {
                createButton(key, categories[key], headerBar, () => showCategoryContent(subjectCode, key, lowerKeyMap));
            }

            showCategoryContent(subjectCode, "notes", lowerKeyMap);
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
        const shareLink = `/assets/pdf/viewer.html?pdfId=${item.url}&title=${encodeURIComponent(item.title)}`;

        card.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.subtitle}</p>
            <p>${item.exam}</p>
            <a href="${shareLink}" target="_blank">View PDF</a>
            <div class="share-group">
                <a href="https://wa.me/?text=${encodeURIComponent(window.location.origin + shareLink)}" target="_blank" title="WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="https://t.me/share/url?url=${encodeURIComponent(window.location.origin + shareLink)}" target="_blank" title="Telegram">
                    <i class="fab fa-telegram"></i>
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + shareLink)}" target="_blank" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + shareLink)}" target="_blank" title="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <button class="share-btn" data-url="${shareLink}" title="Copy Link">
                    <i class="fas fa-link"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

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
