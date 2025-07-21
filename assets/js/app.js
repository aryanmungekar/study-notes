function navigateTo(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      const newContent = tempDiv.querySelector('#main-content');
      const mainContainer = document.querySelector('#main-content');

      if (newContent && mainContainer) {
        mainContainer.innerHTML = newContent.innerHTML;
        window.history.pushState({}, '', url);
        window.scrollTo(0, 0);

        // Re-attach internal link handlers
        attachLinkInterceptors();

        // Optional: Call a custom update function after content loads
        if (typeof updateBreadcrumb === 'function') {
          updateBreadcrumb();
        }
      } else {
        console.warn('Main content container not found.');
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
    const url = link.getAttribute('href');

    const isExternal = url.startsWith('http') || url.startsWith('//');
    const isAnchor = url.startsWith('#');
    const isDownload = link.hasAttribute('download');
    const noSpa = link.hasAttribute('data-no-spa');

    if (!isExternal && !isAnchor && !isDownload && !noSpa) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo(url);
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
