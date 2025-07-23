
  const images = [
    '/assets/images/slider1.jpg',
    '/assets/images/slider2.jpg',
    '/assets/images/slider3.jpg'
  ];

  let index = 0;
  const slider = document.getElementById('slider');

  setInterval(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
  }, 3000); // change every 3 seconds

