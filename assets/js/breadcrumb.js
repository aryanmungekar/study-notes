// breadcrumb.js

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.replace(/\/$/, "");
  const segments = path.split("/").filter(Boolean);
  const startIndex = segments.indexOf("study-demo");

  let breadcrumbHtml = `<a href="/study-demo/"><i class="fa-solid fa-house"></i></a> &gt; `;
  let fullPath = "";

  for (let i = startIndex + 1; i < segments.length; i++) {
    let segment = segments[i];

    // ✅ Remove .html from last segment for cleaner breadcrumb
    if (i === segments.length - 1 && segment.endsWith(".html")) {
      segment = segment.replace(/\.html$/, "");
    }

    const name = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    fullPath += "/" + segments[i];

    if (i === segments.length - 1) {
      breadcrumbHtml += `<span>${name}</span>`;
    } else {
      breadcrumbHtml += `<a href="/study-demo${fullPath}/">${name}</a> &gt; `;
    }
  }

  const breadcrumb = document.getElementById("breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = breadcrumbHtml;
  }
});
