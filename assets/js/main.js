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


// Sélection des éléments
const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

let currentIndex = 0;

// Affiche le témoignage correspondant à l'index
function showTestimonial(index) {
  testimonialItems.forEach((item) => {
    item.classList.remove('active');
  });
  testimonialItems[index].classList.add('active');
}

// Navigation
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonialItems.length;
  showTestimonial(currentIndex);
});

// Premier témoignage par défaut
showTestimonial(currentIndex);


  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    showTestimonial(currentIndex);
  }, 5000); // fait défiler toutes les 5 secondes
  

