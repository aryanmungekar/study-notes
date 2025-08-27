// category-loader.js

const categories = {
  pyq: "PYQ",
  solved_pyq: "Solved PYQ",
  notes: "Notes",
  uploads: "Uploads"
};

const initialButtonsDiv = document.getElementById("initialButtons");
const headerBar = document.getElementById("headerBar");

function createButton(id, label, parent, handler) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = "category-button";
  btn.onclick = () => handler(id);
  parent.appendChild(btn);
}

function showContent(id) {
  initialButtonsDiv.classList.add("slide-out");
  setTimeout(() => {
    initialButtonsDiv.style.display = "none";
    headerBar.style.display = "flex";
    headerBar.innerHTML = "";

    for (let key in categoriesConfig) {
      if (categoriesConfig[key]) {
        createButton(key, categories[key], headerBar, showContent);
      }
    }

    document.querySelectorAll(".content-section").forEach(div => {
      div.style.display = "none";
      div.classList.remove("slide-in");
    });

    const selected = document.getElementById(id);
    selected.style.display = "block";
    selected.classList.add("slide-in");

    loadPDFs(id);
  }, 300);
}

let categoriesConfig = {};

fetch('./categories.json')
  .then(res => res.json())
  .then(data => {
    categoriesConfig = data.categories;
    for (let key in categoriesConfig) {
      if (categoriesConfig[key]) {
        createButton(key, categories[key], initialButtonsDiv, showContent);
      }
    }
  });

function loadPDFs(section) {
  const grid = document.getElementById(section + 'Grid');
  if (!grid || grid.childElementCount > 0) return;

  fetch('./pdf-data.json')
    .then(res => res.json())
    .then(data => {
      data
        .filter(item => item.type === section)
        .forEach(item => {
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
    })
    .catch(error => console.error('Error loading PDFs:', error));
}
