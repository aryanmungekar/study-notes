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
  h1 {
    text-align: center;
    margin-top: 30px;
    color: #333;
  }

  /* Container for all cards */
  .events-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 332px);
    justify-content: center;
    gap: 20px;
    padding: 40px 20px;
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
    width: 300px;
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
    bottom: 285px;
    display: flex;
    gap: 6px;
    background: rgba(255, 255, 255, 0.9);
    padding: 6px 8px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  @media (max-width: 677px) {
    .events-container {
      gap: 0px;
    }

  }
</style>

</head>

<body>

  <h1>Upcoming Events</h1>

  <div class="events-container">
    <div id="grid">
      <div class="event-card">
        <img class="event-thumb" src="\assets\images\1.png" alt="Event Thumbnail">
        <div class="event-info">
          <h3 class="event-title">Google Summer of Code</h3>
          <p class="event-date">Deadline: March 15, 2025</p>
          <p class="event-desc">Work with open-source organizations and get stipends. Apply now!</p>
        </div>
        <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
        <div class="share-group">
          <button class="share-btn" data-url="/events/summerofcode" title="Share Link">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="grid">
      <div class="event-card">
        <img class="event-thumb" src="\assets\images\1.png" alt="Event Thumbnail">
        <div class="event-info">
          <h3 class="event-title">Google Summer of Code</h3>
          <p class="event-date">Deadline: March 15, 2025</p>
          <p class="event-desc">Work with open-source organizations and get stipends. Apply now!</p>
        </div>
        <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
        <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn1">View Details</a>
        <div class="share-group">
          <button class="share-btn" data-url="/events/summerofcode" title="Share Link">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="grid">
      <div class="event-card">
        <img class="event-thumb" src="\assets\images\1.png" alt="Event Thumbnail">
        <div class="event-info">
          <h3 class="event-title">Google Summer of Code</h3>
          <p class="event-date">Deadline: March 15, 2025</p>
          <p class="event-desc"><i class="fa-solid fa-location-dot"></i> Parvatibai Genba Moze, Wagholi</p>
        </div>
        <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
        <div class="share-group">
          <button class="share-btn" data-url="/events/summerofcode" title="Share Link">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="grid">
      <div class="event-card">
        <img class="event-thumb" src="\assets\images\1.png" alt="Event Thumbnail">
        <div class="event-info">
          <h3 class="event-title">Google Summer of Code</h3>
          <p class="event-date">Deadline: March 15, 2025</p>
          <p class="event-desc"><i class="fa-solid fa-location-dot"></i> Parvatibai Genba Moze, Wagholi</p>
        </div>
        <a href="https://summerofcode.withgoogle.com/" target="_blank" class="event-btn">View Details</a>
        <div class="share-group">
          <button class="share-btn" data-url="/events/summerofcode" title="Share Link">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>

  </div>


  <!-- Javascripts -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const grid = document.getElementById('grid');
      grid.querySelectorAll(".share-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const shareUrl = window.location.origin + btn.getAttribute("data-url");

          if (navigator.share) {
            navigator.share({
              title: "Check this new upcomming event",
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