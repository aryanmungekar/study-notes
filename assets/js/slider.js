const track = document.getElementById('sliderTrack');
            const slides = track.children.length;
            let currentIndex = 0;

            function moveToSlide(index) {
                track.style.transition = "transform 0.5s ease-in-out";
                track.style.transform = `translateX(-${index * 100}%)`;
            }

            function resetToFirst() {
                track.style.transition = "none"; // Remove animation
                track.style.transform = `translateX(0%)`;
                currentIndex = 0;
            }

            setInterval(() => {
                currentIndex++;
                moveToSlide(currentIndex);

                // If it's the cloned slide, reset instantly after animation ends
                if (currentIndex === slides - 1) {
                    setTimeout(() => {
                        resetToFirst();
                    }, 500); // Match transition duration
                }
            }, 3000);