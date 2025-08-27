// breadcrumb.js

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash
  const segments = path.split("/").filter(Boolean);

  let breadcrumbHtml = `<a href="/"><i class="fa-solid fa-house"></i></a>`;
  let fullPath = "";

  for (let i = 0; i < segments.length; i++) {
    let segment = segments[i];

    // Remove .html from final breadcrumb
    if (i === segments.length - 1 && segment.endsWith(".html")) {
      segment = segment.replace(/\.html$/, "");
    }

    const name = segment.replace(/-/g, " ").toUpperCase();
    fullPath += "/" + segments[i];

    if (i === segments.length - 1) {
      breadcrumbHtml += ` &gt; <span>${name}</span>`;
    } else {
      breadcrumbHtml += ` &gt; <a href="${fullPath}/">${name}</a>`;
    }
  }

  const breadcrumb = document.getElementById("breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = breadcrumbHtml;
  }
});
