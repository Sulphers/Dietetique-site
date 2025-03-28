// MENU HAMBURGER POUR MOBILE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('open');
});

// FAQ ACCORDEON (avec flèche qui pivote)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    // Récupérer la réponse associée
    const answer = question.nextElementSibling;

    // Toggle de la classe "open" sur le bouton (pour animer la flèche)
    question.classList.toggle('open');

    // Toggle l’affichage de la réponse
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// -----------------------------
// CONFIGURATION DU CAROUSEL
// -----------------------------
const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

let currentIndex = 0;
let isAnimating = false;
let autoSlideInterval; // stockera l'ID du setInterval

// Initialise le premier témoignage
testimonialItems[currentIndex].classList.add('active');

// Lance l'animation d'un slide
function slideTo(newIndex, direction = 'next') {
  if (isAnimating || newIndex === currentIndex) return;
  isAnimating = true;

  const currentItem = testimonialItems[currentIndex];
  const nextItem = testimonialItems[newIndex];

  let outClass, inClass;
  if (direction === 'next') {
    outClass = 'slide-out-to-left';
    inClass = 'slide-in-from-right';
  } else {
    outClass = 'slide-out-to-right';
    inClass = 'slide-in-from-left';
  }

  nextItem.classList.remove('active', 'slide-in-from-left', 'slide-in-from-right');
  nextItem.classList.add(inClass);

  currentItem.classList.remove('active');
  currentItem.classList.add(outClass);

  setTimeout(() => {
    currentItem.classList.remove(outClass);
    nextItem.classList.remove(inClass);
    nextItem.classList.add('active');
    currentIndex = newIndex;
    isAnimating = false;
  }, 600);
}

// -----------------------------
// GESTION DES FLÈCHES
// -----------------------------
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    // Stop & reset timer
    stopAutoSlide();

    // Calcule l'index précédent
    let newIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
    slideTo(newIndex, 'prev');

    // Relance le timer
    startAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoSlide();

    let newIndex = (currentIndex + 1) % testimonialItems.length;
    slideTo(newIndex, 'next');

    startAutoSlide();
  });
}

// -----------------------------
// AUTO-DÉFILEMENT
// -----------------------------
function startAutoSlide() {
  // Toutes les 5 secondes on déclenche un slide 'next'
  autoSlideInterval = setInterval(() => {
    let newIndex = (currentIndex + 1) % testimonialItems.length;
    slideTo(newIndex, 'next');
  }, 10000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Lance l’auto-slide au démarrage
startAutoSlide();


