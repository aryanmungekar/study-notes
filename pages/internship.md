---
layout: default
title: Internships
---


<style>
 
    .main-content {
    padding: 75px 70px 80px 10px;
  }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    #timer {
      font-size: 2rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px 30px;
      border-radius: 10px;
    }

  @media (max-width: 677px) {
    .main-content {
      padding: 80px 10px 80px 10px;
    }

  }
  </style>



  <h1>Coming Soon...</h1><br>

  <!-- <center>
    <div class='onesignal-customlink-container'
      style="border: 0px solid; border-radius: 15px; padding-top: 5px; width: 300px;"></div>
  </center><br> -->


  <div id="timer">Loading timer...</div>

  <script>
    // SET TARGET DATE HERE
    const targetDate = new Date("2025-08-27T12:00:00").getTime(); // YYYY-MM-DDTHH:MM:SS

    const timerEl = document.getElementById('timer');

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        timerEl.innerHTML = "We are live!";
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    // Update every second
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
  </script>
