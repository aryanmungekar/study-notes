---
layout: default
title: Download
---

<style>
  .download-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 40px 20px;
  }
  #installBtn {
    display: none; /* Hidden by default */
    background: #ffffffff;
    color: #007bff;
    border: 1px solid #007bff;
    padding: 15px 25px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }
  #installBtn:hover {
    background: #0056b3;
    color: white;
    border: 1px solid #ffffffff;
  }
  .guide {
    text-align: left;
    margin-top: 40px;
  }
  .guide h3 {
    margin-bottom: 10px;
    color: #222;
  }
  .step {
    background: #f8f9fa;
    padding: 15px;
    margin-bottom: 10px;
    border-left: 5px solid #007bff;
    border-radius: 5px;
  }
</style>

<div class="download-container">
  <h1>📲 Install Our App</h1>
  <p>Download our APP for a faster and smoother experience.</p><br>

  <!-- Install button (only for Android + PC Chrome/Edge) -->
  <button id="installBtn">Install App</button>

  <!-- Guide for Android -->
  <div class="guide">
    <h3>📱 How to Install on Android</h3>
    <div class="step">1. Open this website in <b>Google Chrome</b> on your phone.</div>
    <div class="step">2. Tap the <b>three-dot menu</b> (⋮) at the top-right corner.</div>
    <div class="step">3. Select <b>"Add to Home screen"</b>.</div>
    <div class="step">4. Confirm, and the app will appear on your home screen.</div>
  </div>

  <!-- Guide for iOS -->
  <div class="guide">
    <h3> How to Install on iOS</h3>
    <div class="step">1. Open this website in <b>Safari</b> on your iPhone/iPad.</div>
    <div class="step">2. Tap the <b>Share icon</b> (square with ↑ arrow).</div>
    <div class="step">3. Scroll down and select <b>"Add to Home Screen"</b>.</div>
    <div class="step">4. Confirm, and the app will appear on your home screen.</div>
  </div>
</div>

<script>
  let deferredPrompt;
  const installBtn = document.getElementById('installBtn');

  // Listen for the install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'inline-block'; // Show button only when available
  });

  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show native install popup
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null; // Reset
    }
  });
</script>
