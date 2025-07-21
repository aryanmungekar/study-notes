function navigateTo(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // Replace only the #main-content
      const newContent = tempDiv.querySelector('#main-content');
      if (newContent) {
        document.querySelector('#main-content').innerHTML = newContent.innerHTML;
        window.history.pushState({}, '', url);
        window.scrollTo(0, 0);
        attachLinkInterceptors(); // Re-attach SPA link handlers
        reloadBreadcrumbScript(); // Reload breadcrumb logic manually
      }
    })
    .catch(err => console.error('Navigation failed:', err));
}

// Handle browser back/forward
window.onpopstate = () => {
  navigateTo(location.pathname);
};

// Intercept internal links
function attachLinkInterceptors() {
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const href = link.getAttribute('href');

    const isExternal = href.startsWith('http') || href.startsWith('//');
    const isAnchor = href.startsWith('#');
    const isDownload = link.hasAttribute('download');
    const noSpa = link.hasAttribute('data-no-spa');

    if (!isExternal && !isAnchor && !isDownload && !noSpa) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // Convert relative to absolute path using <a> element
        const absoluteURL = new URL(href, window.location.href).pathname;
        navigateTo(absoluteURL);
      });
    }
  });
}


// Initial run
document.addEventListener('DOMContentLoaded', () => {
  attachLinkInterceptors();

  // Run breadcrumb or any other setup
  if (typeof updateBreadcrumb === 'function') {
    updateBreadcrumb();
  }
});

function reloadBreadcrumbScript() {
  // Remove old script if it exists
  const oldScript = document.querySelector('script[data-dynamic="breadcrumb"]');
  if (oldScript) oldScript.remove();

  // Create a new script tag
  const newScript = document.createElement('script');
  newScript.src = '/assets/js/breadcrumb.js';
  newScript.setAttribute('data-dynamic', 'breadcrumb'); // For easy reference
  document.body.appendChild(newScript);
}
