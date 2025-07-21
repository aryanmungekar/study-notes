function navigateTo(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const newContent = tempDiv.querySelector('#main-content');
      if (newContent) {
        document.querySelector('#main-content').innerHTML = newContent.innerHTML;
        window.history.pushState({}, '', url);
        window.scrollTo(0, 0);
        attachLinkInterceptors(); // Re-attach handlers to new links
      }
    })
    .catch(err => console.error('Navigation failed:', err));
}

// SPA behavior for browser back/forward
window.onpopstate = () => navigateTo(location.pathname);

// Intercept <a> clicks inside #main-content
function attachLinkInterceptors() {
  const links = document.querySelectorAll('#main-content a[href]');
  links.forEach(link => {
    const url = link.getAttribute('href');
    if (!url.startsWith('http') && !url.startsWith('#') && !link.hasAttribute('download')) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo(url);
      });
    }
  });
}

// Run once on initial page load
document.addEventListener('DOMContentLoaded', attachLinkInterceptors);
