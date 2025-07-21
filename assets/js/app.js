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
      }
    })
    .catch(err => console.error('Navigation failed:', err));
}

window.onpopstate = () => navigateTo(location.pathname);
