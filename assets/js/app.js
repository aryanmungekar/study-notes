// Dynamically loads pages and updates the main-content area
function navigateTo(url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;
      const newContent = tempDiv.querySelector('#main-content');

      if (newContent) {
        document.querySelector('#main-content').innerHTML = newContent.innerHTML;
        window.history.pushState({}, '', url);
        window.scrollTo(0, 0);
      }
    })
    .catch(err => console.error('Navigation failed:', err));
}

// Enable browser back/forward navigation
window.onpopstate = () => navigateTo(location.pathname);
