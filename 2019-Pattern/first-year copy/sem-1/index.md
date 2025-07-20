---
layout: default
title: Home
---

<style>
   .card-container {
  display: flex;
  gap: 23px 30px;           /* spacing between cards */
  flex-wrap: wrap;     /* wrap on smaller screens */
  justify-content: center; /* center align */
  margin-top: 5px;
}

.subject-card {
  background-color: #d6d6d6ff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 230px;                   /* fixed width */
  height: 120px;                  /* fixed height */
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.subject-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 1.3;
  max-height: 42px;               /* control overflow */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;          /* max 2 lines */
  -webkit-box-orient: vertical;
}

.subject-code {
  font-size: 12px;
  color: #666;
}

.subject-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}


        


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

 <!-- ✅ Breadcrumb Container with Back and Breadcrumb -->
<div id="breadcrumb-container">
  <!-- <span class="breadcrumb-icon" onclick="history.back()">🔙</span> -->
  <nav id="breadcrumb"></nav>
</div>

<script>
  const path = window.location.pathname.replace(/\/$/, ""); // remove trailing slash
  const segments = path.split("/").filter(Boolean); // remove empty strings
  const startIndex = segments.indexOf("study-demo");
  let breadcrumbHtml = `<a href="/study-demo/"><i class="fa-solid fa-house"></i></a> &gt; `;
  let fullPath = "";

  for (let i = startIndex + 1; i < segments.length; i++) {
    const segment = segments[i];
    const name = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    fullPath += "/" + segment;

    if (i === segments.length - 1) {
      breadcrumbHtml += `<span>${name}</span>`;
    } else {
      breadcrumbHtml += `<a href="/study-demo${fullPath}/">${name}</a> &gt; `;
    }
  }

  document.getElementById("breadcrumb").innerHTML = breadcrumbHtml;
</script>

<br><br>
<div class="card-container">

<a href="1518987.html" style="text-decoration: none;">
  <div class="subject-card">
    <div class="subject-title">Computer Networks and Security</div>
    <div class="subject-code">Code : 310244</div>
  </div>
</a>

<a href="5100010.html" style="text-decoration: none;">
  <div class="subject-card">
    <div class="subject-title">Computer Networks and Security and database management</div>
    <div class="subject-code">Code : 310244</div>
  </div>
</a>

<a href="1000.html" style="text-decoration: none;">
  <div class="subject-card">
    <div class="subject-title">Computer</div>
    <div class="subject-code">Code : 310244</div>
  </div>
</a>

<a href="#" style="text-decoration: none;">
  <div class="subject-card">
    <div class="subject-title">Computer</div>
    <div class="subject-code">Code : 310244</div>
  </div>
</a>

<a href="#" style="text-decoration: none;">
  <div class="subject-card">
    <div class="subject-title">Computer</div>
    <div class="subject-code">Code : 310244</div>
  </div>
</a>


</div>