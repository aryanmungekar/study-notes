// assets/js/app-router.js

document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content");

  function loadPage(url) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const newContent = doc.querySelector("#main-content");
        if (newContent) {
          mainContent.innerHTML = newContent.innerHTML;

          // Push URL to browser history
          history.pushState(null, "", url);

          // Re-run dynamic scripts like breadcrumbs
          if (typeof updateBreadcrumbs === "function") {
            updateBreadcrumbs();
          }
        }
      })
      .catch(err => console.error("Failed to load page:", err));
  }

  // Intercept link clicks
  document.body.addEventListener("click", function (e) {
    const link = e.target.closest("a");

    if (
      link &&
      link.href.startsWith(window.location.origin) &&
      !link.hasAttribute("download") &&
      !link.getAttribute("target")
    ) {
      e.preventDefault();
      loadPage(link.getAttribute("href"));
    }
  });

  // Handle browser back/forward
  window.addEventListener("popstate", () => loadPage(location.pathname));
});
