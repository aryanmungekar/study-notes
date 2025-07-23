
  const images = [
    '/assets/images/slider1.jpg',
    '/assets/images/slider2.jpg',
    '/assets/images/slider3.jpg'
  ];

  let index = 0;
  const slider = document.getElementById('slider');

  setInterval(() => {
  slider.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
    slider.style.opacity = 1;
  }, 300);
}, 3000);


