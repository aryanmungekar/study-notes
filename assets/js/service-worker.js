if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log("✅ Service Worker registered"))
      .catch(err => console.log("❌ SW registration failed:", err));
  });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Show custom install button (if any)
  const installBtn = document.getElementById("installBtn");
  if (installBtn) installBtn.style.display = "inline-block";
});

// Function to trigger the install prompt
function showInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ User accepted the install prompt');
      } else {
        console.log('❌ User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  }
}