// ✅ category-loader.js

const categories = {
  notes: "📝 Notes",
  pyq: "📄 PYQ",
  solved_pyq: "✅ Solved PYQ",
  uploads: "📤 Uploads"
};

const initialButtonsDiv = document.getElementById("initialButtons");
const headerBar = document.getElementById("headerBar");

let selectedSubjectCode = null;

// Utility: Create a button with handler
function createButton(id, label, parent, handler) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = "category-button";
  btn.onclick = () => handler(id);
  parent.appendChild(btn);
}

// ✅ Step 1: Load Subjects and Show Buttons
fetch('../../../pdf-data.json')
  .then(res => res.json())
  .then(subjects => {
    for (const subjectCode in subjects) {
      const subjectName = subjects[subjectCode].name;
      createButton(subjectCode, subjectName, initialButtonsDiv, (code) => showCategoryButtons(code, subjects));
    }
  })
  .catch(err => console.error("Error loading subject list:", err));

// ✅ Step 2: Show Category Buttons for Selected Subject
function showCategoryButtons(subjectCode, data) {
  selectedSubjectCode = subjectCode;

  initialButtonsDiv.classList.add("slide-out");
  setTimeout(() => {
    initialButtonsDiv.style.display = "none";
    headerBar.style.display = "flex";
    headerBar.innerHTML = "";

    for (const key in categories) {
      createButton(key, categories[key], headerBar, (category) => showCategoryContent(subjectCode, category, data));
    }
  }, 300);
}

// ✅ Step 3: Show Content Section and Load PDFs
function showCategoryContent(subjectCode, category, data) {
  // Hide all content sections
  document.querySelectorAll(".content-section").forEach(div => {
    div.style.display = "none";
    div.classList.remove("slide-in");
  });

  // Show selected section
  const section = document.getElementById(category);
  if (!section) return;
  section.style.display = "block";
  section.classList.add("slide-in");

  // Load PDFs into grid
  loadPDFs(subjectCode, category, data);
}

// ✅ Step 4: Load PDFs for a Given Subject and Category
function loadPDFs(subjectCode, category, allData) {
  const grid = document.getElementById(category + 'Grid');
  if (!grid) return;

  // Clear grid first
  grid.innerHTML = "";

  const subject = allData[subjectCode];
  const items = subject && subject[category] ? subject[category] : [];

  if (items.length === 0) {
    grid.innerHTML = `<p>No PDFs available in ${categories[category]}.</p>`;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'pdf-card';
    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <h4>${item.title}</h4>
      <p>${item.subtitle}</p>
      <p>${item.exam}</p>
      <a href="/assets/pdfjs/web/viewer.html?file=${encodeURIComponent(item.url)}" target="_blank">View PDF</a>
    `;
    grid.appendChild(card);
  });
}
