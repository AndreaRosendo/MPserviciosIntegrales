const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const carouselInner = document.querySelector('.carousel-inner');
let currentSlide = 0;

// Menú desplegable
menuButton.addEventListener('click', () => {
  menu.classList.toggle('-translate-x-full');
});

const scrollTopButton = document.getElementById('scroll-top');

// Mostrar u ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopButton.style.display = 'block'; // Mostrar el botón
  } else {
    scrollTopButton.style.display = 'none'; // Ocultarlo
  }
});

// Subir al principio de la página al hacer clic
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Efecto suave al desplazarse hacia arriba
  });
});


// Carrusel automático
setInterval(() => {
  currentSlide = (currentSlide + 1) % carouselInner.children.length;
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 3000);

// Efecto de scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-effect').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});
