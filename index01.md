---
layout: default
title: Home
---
<style>
    nav {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 10px;
        background: #ddd;
    }
    nav a {
        color: black;
        text-decoration: none;
        font-weight: 500;
    }
    nav a:hover {
        text-decoration: underline;
    }
    .hero {
        text-align: center;
        padding: 50px 20px;
    }
    .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 15px;
    }
    .hero p {
        font-size: 1.1rem;
        color: #555;
        max-width: 600px;
        margin: auto;
    }
    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 40px 20px;
    }
    .feature-card {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
    }
    .feature-card h3 {
        margin-bottom: 10px;
    }
    .reviews {
        padding: 40px 20px;
        text-align: center;
    }
    .reviews h2 {
        margin-bottom: 20px;
    }
    .slider-container {
        overflow-x: auto;
        display: flex;
        gap: 20px;
        scroll-snap-type: x mandatory;
        padding-bottom: 10px;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
    }
    .slider-container::-webkit-scrollbar {
        display: none;
    }
    .review {
        flex: 0 0 auto;
        scroll-snap-align: center;
        background: #f4f4f4;
        padding: 15px;
        border-radius: 10px;
        width: 200px;
        text-align: center;
    }
    .review img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid black;
        margin-bottom: 10px;
    }
    footer {
        background: #eee;
        padding: 20px;
        text-align: center;
        color: #555;
        font-size: 0.9rem;
    }
</style>

<!-- <div class="slider-container">
      <div class="slider-track" id="sliderTrack">
          <img src="/assets/images/1.png" class="slide-img">
          <img src="/assets/images/2.png" class="slide-img">
          <img src="/assets/images/3.png" class="slide-img">
          <img src="/assets/images/1.png" class="slide-img"> 
      </div>
</div> -->


<section class="hero">
    <h1>Your Gateway to Academic Excellence</h1>
    <p>We provide high-quality, well-organized notes for all your university subjects. Stay ahead with comprehensive study material, previous year questions, and more — all in one place.</p>
</section>

<section class="features">
    <div class="feature-card">
        <h3>📚 Well-Curated Notes</h3>
        <p>Get neatly structured notes for every subject, made by top students and verified by faculty.</p>
    </div>
    <div class="feature-card">
        <h3>📄 Previous Year Papers</h3>
        <p>Access a collection of solved and unsolved PYQs to prepare strategically for exams.</p>
    </div>
    <div class="feature-card">
        <h3>⚡ Fast & Easy Access</h3>
        <p>Find your notes instantly with our easy-to-navigate categories and search feature.</p>
    </div>
</section>

<h2>Pattern 2019</h2>
<div class="branch-grid1">

  <a href="/sppu/2019-Pattern/first-year" style="text-decoration: none; color: inherit;">
    <div style="background-color: rgba(255, 253, 253, 1);" class="button-card">
      <i style="font-size: 40px; color: black;" class="fa-solid fa-lightbulb"></i>
      <h4>First Year</h4>

    </div>
  </a>

  <a href="/sppu/2019-Pattern/ai&ds/" style="text-decoration: none; color: inherit;">
    <div style="background-color: rgba(255, 255, 255, 1);" class="button-card">
      <i style="font-size: 40px; color: black;" class="fa-solid fa-atom"></i>
      <h4>Artificial Intelligence & Data Science</h4>
    </div>
  </a>


  <a href="/sppu/2019-Pattern/computer-science/" style="text-decoration: none; color: inherit;">
    <div style="background-color: rgba(255, 255, 255, 1));" class="button-card">
      <i style="font-size: 40px; color: black;" class="fa-solid fa-chalkboard"></i>
      <h4>Computer Science</h4>
    </div>
  </a>

  <a href="/sppu/2019-Pattern/information-technology/" style="text-decoration: none; color: inherit;">
    <div style="background-color: rgba(253, 253, 253, 1);" class="button-card">
      <i style="font-size: 40px; color: black;" class="fa-solid fa-bolt"></i>
      <h4>Information Technology</h4>
    </div>
  </a>



</div>

<section class="reviews">
    <h2>What Students Say</h2>
    <div class="slider-container">
        <div class="review">
            <img src="https://via.placeholder.com/100" alt="Student 1">
            <p>"Best platform for quick and quality notes!"</p>
        </div>
        <div class="review">
            <img src="https://via.placeholder.com/100" alt="Student 2">
            <p>"Helped me pass with flying colors!"</p>
        </div>
        <div class="review">
            <img src="https://via.placeholder.com/100" alt="Student 3">
            <p>"Notes are concise and to the point."</p>
        </div>
        <div class="review">
            <img src="https://via.placeholder.com/100" alt="Student 4">
            <p>"Highly recommend to all my friends."</p>
        </div>
    </div>
</section>
