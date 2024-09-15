const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnail=document.querySelectorAll('.images img')

let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;

function updateCarousel() {
  const width = document.querySelector('.carousel').offsetWidth;
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;

  thumbnail.forEach((thumbnail, index) => {
    thumbnail.classList.toggle('active', index === currentIndex);
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

thumbnail.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });


// Adjust carousel on window resize
window.addEventListener('resize', updateCarousel);
