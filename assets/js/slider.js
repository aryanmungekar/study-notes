const track = document.getElementById('sliderTrack');
            const totalSlides = track.children.length;
            let currentIndex = 0;

            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 3000);