---
layout: default
title: Home
---

<style>

    #breadcrumb a {
      color: #007BFF;
      text-decoration: none;
      margin-right: 5px;
    }
    #breadcrumb a:hover {
      text-decoration: underline;
    }
    #breadcrumb span {
      font-weight: bold;
      color: #333;
    }
  </style>

 <!-- ✅ Breadcrumb goes here -->
  <nav id="breadcrumb" style="font-size: 14px; margin: 2px 0;"></nav>
  <script>
    const baseUrl = "/study-demo";
    const path = window.location.pathname;
    const segments = path.replace(/\/$/, "").split("/");
    const startIndex = segments.indexOf("study-demo");
    let breadcrumbHtml = '';
    let fullPath = "";
    for (let i = startIndex; i < segments.length; i++) {
      const name = segments[i].replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      fullPath += '/' + segments[i];
      if (i === segments.length - 1) {
        breadcrumbHtml += `<span>${name}</span>`;
      } else {
        breadcrumbHtml += `<a href="${fullPath}/">${name}</a> &gt; `;
      }
    }
    document.getElementById("breadcrumb").innerHTML = breadcrumbHtml;
  </script>

<div>



</div>