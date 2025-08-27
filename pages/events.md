---
layout: default
title: Events
---

<!-- onesignal push notification -->
<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "ee9cfc93-71c9-41e0-a30c-20662ea9937f",
    });
  });
</script>

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
    height: 100%;
    justify-content: space-between;
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
    right: 0px;
    top: 0px;
    display: flex;
    gap: 6px;
    background: rgba(255, 255, 255, 0.9);
    padding: 6px 8px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
    height: 50px;
    width: 50px;
  }

  .main-content {
    padding: 75px 70px 80px 10px;
  }

  @media (max-width: 677px) {
    .events-container {
      gap: 10px;
      grid-template-columns: repeat(auto-fill, 350px);
    }

    .main-content {
      padding: 80px 10px 80px 10px;
    }

  }
</style>


<h1>Upcoming Events</h1><br>

<center>
    <div class='onesignal-customlink-container'
      style="border: 0px solid; border-radius: 15px; padding-top: 5px; width: 300px;"></div>
  </center>







  


  <div class="events-container">
    <div class="event-card">
      <img class="event-thumb" src="https://hackodisha-4.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fd7d594eaf4ac4a4db9cd998c65c0fc9a%2Fassets%2Fcover%2F381.png&w=1440&q=100" alt="Event Thumbnail">
      <div class="event-info">
        <h3 class="event-title">HackOdisha 5.0</h3>
        <p class="event-date"><i class="fa-solid fa-calendar"></i>: Sep 6 - 7, 2025</p>
        <p class="event-desc"><i class="fa-solid fa-location-dot"></i>: Online</p>
        <p class="event-desc"><i class="fa-solid fa-trophy"></i>: $7,840</p>
        <p class="event-desc"><i class="fa-solid fa-indian-rupee-sign"></i><b>Fees</b>: Free</p>
        <p class="event-desc"><b>Type:</b> Hackthon</p>        
      </div>
      <a href="https://hackodisha-4.devfolio.co/" target="_blank" class="event-btn">Register Now</a>
      <div class="share-group">
        <button class="share-btn" data-url="#" title="Share Link">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
      </div>
    </div>

  <div class="event-card">
      <img class="event-thumb" src="/assets/images/event2.png" alt="Event Thumbnail">
      <div class="event-info">
        <h3 class="event-title">Forge the Future</h3>
        <p class="event-date"><i class="fa-solid fa-calendar"></i>: Sep 07, 2025</p>
        <p class="event-desc"><i class="fa-solid fa-location-dot"></i>: Online</p>
        <p class="event-desc"><i class="fa-solid fa-trophy"></i>: ₹300000</p>
        <p class="event-desc"><i class="fa-solid fa-indian-rupee-sign"></i><b>Fees</b>: Free</p>
        <p class="event-desc"><b>Type:</b> Hackthon</p>        
      </div>
      <a href="https://elastic.hackerearth.com/" target="_blank" class="event-btn">Register Now</a>
      <div class="share-group">
        <button class="share-btn" data-url="#" title="Share Link">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
      </div>
    </div>

  <div class="event-card">
      <img class="event-thumb" src="/assets/images/eventcover.png" alt="Event Thumbnail">
      <div class="event-info">
        <h3 class="event-title">Ctrl+Space</h3>
        <p class="event-date"><i class="fa-solid fa-calendar"></i>: 24 Aug 2025</p>
        <p class="event-desc"><i class="fa-solid fa-location-dot"></i>: Newton School of Technology, ADYPU Pune (Online)</p>
        <p class="event-desc"><i class="fa-solid fa-trophy"></i>: ₹60,000</p>
        <p class="event-desc"><i class="fa-solid fa-indian-rupee-sign"></i><b>Fees</b>: Free</p>
        <p class="event-desc"><b>Type:</b> Hackthon</p>
      </div>
      <a href="https://unstop.com/hackathons/ctrlspace-newton-school-of-technology-adypu-pune-1533848" target="_blank" class="event-btn">Register Now</a>
      <div class="share-group">
        <button class="share-btn" data-url="#" title="Share Link">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
      </div>
    </div>

  <div class="event-card">
      <img class="event-thumb" src="/assets/images/event1.png" alt="Event Thumbnail">
      <div class="event-info">
        <h3 class="event-title">IDEA Bootcamp & Pitch Fest 2025</h3>
        <p class="event-date"><i class="fa-solid fa-calendar"></i>:  6th, 7th & 8th Aug 2025</p>
        <p class="event-desc"><i class="fa-solid fa-location-dot"></i>: Seminar Hall, ADYPSOE, Lohegaon</p>
        <p class="event-desc"><i class="fa-solid fa-trophy"></i>: Exciting Prizes and Certificates</p>
        <p class="event-desc"><i class="fa-solid fa-indian-rupee-sign"></i><b>Fees</b>: ₹ 49</p>
        <p class="event-desc"><b>Type:</b> Event</p>      
      </div>
      <a href="https://forms.gle/A3jYQcqP3dTGsK8v7" target="_blank" class="event-btn">Register Now</a>
      <div class="share-group">
        <button class="share-btn" data-url="#" title="Share Link">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
      </div>
    </div>
    

  </div>


