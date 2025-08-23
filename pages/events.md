---
layout: default
title: Events
---

<!-- <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css?" />
  <link rel="stylesheet" href="/assets/css/semester.css">
  <link rel="stylesheet" href="/assets/css/subject.css">
  <link rel="stylesheet" href="/assets/css/breadcrumb.css">
  <link rel="stylesheet" href="/assets/css/content.css"> -->

<style>

  /* Container for all cards */
  .events-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    gap: 20px;
    padding: 5px 20px;
  }


  .event-card {
    background: #fff;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 100%;
    height: 300px;
  }

  .event-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .event-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  .event-date {
    font-size: 0.9rem;
    color: #777;
    margin: 0;
  }

  .event-desc {
    font-size: 0.95rem;
    color: #555;
    margin: 0 0 8px 0;
  }

  .event-btn {
    align-self: flex-start;
    background: #ffffff;
    color: #000000;
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: background 0.2s ease;
    position: absolute;
    right: 9px;
    bottom: 10px;
    border: 1px solid black;
  }

  .event-btn1 {
    align-self: flex-start;
    background: #ffffff;
    color: #000000;
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: background 0.2s ease;
    position: absolute;
    right: 9px;
    bottom: 50px;
    border: 1px solid black;
  }

  .event-btn:hover {
    background: #000000;
    color: #ffffff;
  }

  .event-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    padding: 16px;
    position: relative;
    margin: 15px 0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .event-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  }

  .event-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #222;
  }

  .event-desc {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 10px;
  }

  .event-date {
    font-size: 0.9rem;
    font-weight: 500;
    color: #d35400;
    margin-bottom: 5px;
    /* Leaves space for buttons */
  }

  .card-actions {
    position: absolute;
    bottom: 12px;
    left: 16px;
    right: 16px;
    display: flex;
    justify-content: space-between;
  }

  .btn-open,
  .btn-share {
    background: #007bff;
    color: #fff;
    padding: 8px 14px;
    font-size: 0.85rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .btn-open:hover {
    background: #0056b3;
  }

  .btn-share {
    background: #28a745;
  }

  .btn-share:hover {
    background: #1e7e34;
  }

  .share-group {
    position: absolute;
    right: -1px;
    bottom: 253px;
    display: flex;
    gap: 6px;
    background: rgba(255, 255, 255, 0.9);
    padding: 6px 8px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .main-content {
    padding: 75px 70px 80px 10px;
}

  @media (max-width: 677px) {
    .events-container {
      gap: 0px;
      grid-template-columns: repeat(auto-fill, 350px);
    }

        .main-content {
        padding: 80px 10px 80px 10px;
    }

  }
</style>


  <h1>Upcoming Events</h1><br>

<div id="events-message" style="display:none; text-align:center; padding:20px; max-width:500px; margin:auto; background:#f8f8f8; border-radius:10px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
  <h2>Unlock Exclusive Opportunities 🚀</h2>
  <p>Sign in and install our app to explore <b>amazing events, internships, hackathons, and scholarships</b> tailored for you.</p>
  <p>Benefits of logging in & installing:</p>
  <ul style="text-align:left; display:inline-block; margin-top:10px;">
    <li>🎯 Personalized event recommendations</li>
    <li>📩 Instant notifications before deadlines</li>
    <li>📥 Offline access via our PWA</li>
    <li>🤝 Connect & share events with friends</li>
  </ul>
  <div style="margin-top:10px;">
    <button id="login-btn" style="display:none; padding:10px 20px; background:#007bff; color:white; border:none; border-radius:6px; cursor:pointer;">Login to Continue</button>
    <button id="install-btn" style="display:none; padding:10px 20px; background:#28a745; color:white; border:none; border-radius:6px; cursor:pointer;">
  Install App
</button>   
  </div>
</div>


<div class="events-container" id="events-content">


  <center><div class='onesignal-customlink-container' style="border: 1px solid; border-radius: 15px; padding-top: 5px; width: 300px;"></div></center>


  <div class="events-container">
    <div class="event-card">
    <img class="event-thumb" src="/assets/images/1.png" alt="Event Thumbnail">
    <div class="event-info">
      <h3 class="event-title">Google Summer of Code</h3>
      <p class="event-date">Deadline: March 15, 2025</p>
      <p class="event-desc">Work with open-source organizations and get stipends. Apply now!</p>
    </div>
    <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
    <div class="share-group">
      <button class="share-btn" data-url="#" title="Share Link">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  </div>

  <div class="event-card">
    <img class="event-thumb" src="/assets/images/1.png" alt="Event Thumbnail">
    <div class="event-info">
      <h3 class="event-title">Google Summer of Code</h3>
      <p class="event-date">Deadline: March 15, 2025</p>
      <p class="event-desc">Work with open-source organizations and get stipends. Apply now!</p>
    </div>
    <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
    <div class="share-group">
      <button class="share-btn" data-url="#" title="Share Link">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  </div>

  <div class="event-card">
    <img class="event-thumb" src="/assets/images/1.png" alt="Event Thumbnail">
    <div class="event-info">
      <h3 class="event-title">Google Summer of Code</h3>
      <p class="event-date">Deadline: March 15, 2025</p>
      <p class="event-desc">Work with open-source organizations and get stipends. Apply now!</p>
    </div>
    <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
    <div class="share-group">
      <button class="share-btn" data-url="#" title="Share Link">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  </div>

  <div class="event-card">
    <img class="event-thumb" src="/assets/images/1.png" alt="Event Thumbnail">
    <div class="event-info">
      <h3 class="event-title">Google Summer of Code</h3>
      <p class="event-date">Deadline: March 15, 2025</p>
      <p class="event-desc">Work with open-source organizations and get stipends. Apply now!</p>
    </div>
    <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
    <div class="share-group">
      <button class="share-btn" data-url="#" title="Share Link">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  </div>

  <div class="event-card">
    <img class="event-thumb" src="/assets/images/1.png" alt="Event Thumbnail">
    <div class="event-info">
      <h3 class="event-title">Google Summer of Code</h3>
      <p class="event-date">Deadline: March 15, 2025</p>
      <p class="event-desc">Work with open-source organizations and get stipends. Apply now!</p>
    </div>
    <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
    <div class="share-group">
      <button class="share-btn" data-url="#" title="Share Link">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  </div>

  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", async function () {
  const eventsContent = document.getElementById("events-content");
  const eventsMessage = document.getElementById("events-message");
  const loginBtn = document.getElementById("login-btn");
  const installBtn = document.getElementById("install-btn");
  let deferredPrompt = null;

  function isPWAInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  }

  // Handle PWA install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!isPWAInstalled()) {
      installBtn.style.display = 'inline-block';
    }
  });

  installBtn.addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        location.reload(); // refresh after install
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    } else {
      // fallback for browsers with no beforeinstallprompt
      alert("To install the app, open your browser menu and tap 'Add to Home Screen'!");
    }
  });

  loginBtn.addEventListener("click", () => {
    window.location.href = "/login/";
  });

  async function checkAccess() {
    if (!window.supabase) {
      console.error("Supabase not initialized. Ensure auth.js is loaded first.");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    const installed = isPWAInstalled();

    if (user && installed) {
      eventsContent.style.display = "grid";
      eventsMessage.style.display = "none";
    } else {
      eventsContent.style.display = "none";
      eventsMessage.style.display = "block";
      loginBtn.style.display = user ? "none" : "inline-block";
      if (installed) installBtn.style.display = "none";
    }
  }

  await checkAccess();
  supabase.auth.onAuthStateChange(() => {
    checkAccess();
    location.reload(); // auto refresh when auth changes (login/logout)
  });

  // Share button logic
  document.querySelectorAll(".share-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const shareUrl = window.location.origin + btn.getAttribute("data-url");
      if (navigator.share) {
        navigator.share({
          title: "Check this new upcoming event",
          text: "Pune University:",
          url: shareUrl
        }).catch(err => console.error("Sharing failed:", err));
      } else {
        navigator.clipboard.writeText(shareUrl)
          .then(() => alert("Link copied to clipboard!"))
          .catch(() => alert("Failed to copy link"));
      }
    });
  });
});
</script>
