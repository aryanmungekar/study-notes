---
layout: default
title: Home
---

<!-- Semester Page -->


<style>
  .card-container {
  display: flex;
  gap: 23px 30px;           /* spacing between cards */
  flex-wrap: wrap;     /* wrap on smaller screens */
  justify-content: center; /* center align */
  margin-top: 5px;
}

.card {
  background: #d6d6d6ff;
  border: 1px black;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgb(0 0 0 / 38%);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
   width: 230px;                   /* fixed width */
  height: 120px; 
  text-decoration: none;
  color: #000000ff;
  /* font-size: 1.1rem; */
}

@media (max-width: 600px) {
  .card {
    width: 150px;       /* or a fixed width like 320px */
    height: auto;     /* allow height to adjust */
  }
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.card h3 {
  margin: 0;
  font-size: 1.2rem;
  /* font-family: "Seymour One", sans-serif; */
  /* font-weight: 400; */
  /* font-style: normal; */
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

<br>
<div  class="card-container">

<a class="card" href="sem-1">
  <h3>Semester 1</h3>
</a>

<a class="card" href="sem-2">
  <h3>Semester 2</h3>
</a>

<a class="card" href="sem-1">
  <h3>Semester 1</h3>
</a>

<a class="card" href="sem-2">
  <h3>Semester 2</h3>
</a>

<a class="card" href="sem-1">
  <h3>Semester 1</h3>
</a>

<a class="card" href="sem-2">
  <h3>Semester 2</h3>
</a>

<a class="card" href="sem-1">
  <h3>Semester 1</h3>
</a>

<a class="card" href="sem-2">
  <h3>Semester 2</h3>
</a>

<a class="card" href="sem-1">
  <h3>Semester 1</h3>
</a>

<a class="card" href="sem-2">
  <h3>Semester 2</h3>
</a>

<a class="card" href="sem-1">
  <h3>Semester 1</h3>
</a>

<a class="card" href="sem-2">
  <h3>Semester 2</h3>
</a>


</div>

