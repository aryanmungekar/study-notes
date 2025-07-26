
  const track = document.getElementById('sliderTrack');
  const slideWidth = 320; // Must match .slide-img width
  const slides = track.children.length;
  let currentIndex = 0;

  function moveToSlide(index) {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function resetToFirst() {
    track.style.transition = "none"; // Instantly jump
    track.style.transform = `translateX(0px)`;
    currentIndex = 0;
  }

  setInterval(() => {
    currentIndex++;
    moveToSlide(currentIndex);

    // If we reach the last (clone), reset
    if (currentIndex === slides - 1) {
      setTimeout(() => {
        resetToFirst();
      }, 500); // Match transition duration
    }
  }, 3000); // Change every 3 seconds

