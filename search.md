---
layout: default
title: Search
permalink: /search/
---


  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    #search-box {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    #search-results {
      list-style: none;
      padding: 0;
    }
    #search-results li {
      padding: 12px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    #search-results a {
      font-weight: bold;
      text-decoration: none;
      color: #007acc;
    }
    #search-results p {
      margin: 5px 0 0;
      color: #555;
    }
  </style>


  <h1>🔍 Search Notes</h1>
  <input type="text" id="search-box" placeholder="Type to search Notes, Subject Codes..." autocomplete="off">
  <ul id="search-results"></ul>

  <script src="https://unpkg.com/lunr/lunr.js"></script>
  <script>
    let idx = null;
    let store = [];

    fetch('/search.json')
      .then(res => res.json())
      .then(data => {
        const pages = data.pages;
        store = pages;

        idx = lunr(function () {
          this.ref('url');
          this.field('title');
          this.field('content');

          pages.forEach(page => this.add(page));
        });

        document.getElementById('search-box').addEventListener('input', function (e) {
          const query = e.target.value.trim();
          const results = idx.search(query);
          const resultList = document.getElementById('search-results');
          resultList.innerHTML = '';

          if (!query) return;

          if (results.length === 0) {
            resultList.innerHTML = '<li>No results found</li>';
            return;
          }

          results.forEach(result => {
            const item = store.find(p => p.url === result.ref);
            const li = document.createElement('li');
            li.innerHTML = `
              <a href="${item.url}">${item.title}</a>
              <p>${item.content.slice(0, 150)}...</p>
            `;
            resultList.appendChild(li);
          });
        });
      });
  </script>

