window.current_article="slide-photo";

$(document).ready(function() {
  // Slideshow functionality
  function nextSlide() {
    const $active = $('.hero-slide.active');
    const $next = $active.next('.hero-slide').length ? $active.next('.hero-slide') : $('.hero-slide').first();
    $active.removeClass('active');
    $next.addClass('active');
  }
  
  setInterval(nextSlide, 5000);
  
  // Toggle submenu - Updated with error handling
  $('.nav-link').on('click', function(e) {
    e.preventDefault(); // Prevent default for all nav links
    const $parent = $(this).closest('.nav-item');
    
    if($parent.length && $parent.find('.submenu').length) {
      $('.nav-item').not($parent).removeClass('active');
      $parent.toggleClass('active');
    }
  });
  
  // Handle submenu article display - Updated with error handling
  $('.submenu-link').on('click', function(e) {
    e.preventDefault();
    
    const articleId = $(this).data('article');
    if(!articleId) return; // Guard clause
    
    // Hide all articles and show target article
    $('.article').removeClass('active');
    $('#' + articleId).addClass('active');
    
    // Hide hero section
    $('.hero').hide();
    
    // Smooth scroll with error handling
    const $target = $('#' + articleId);
    if($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 800);
    }
  });
  
  // Show hero and hide articles when clicking main nav - Updated
  $('.nav-link').on('click', function(e) {
    const $submenu = $(this).closest('.nav-item').find('.submenu');
    if(!$submenu.length) {
      $('.article').removeClass('active');
      $('.hero').show();
    }
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
   
   
  const courseButtons = document.querySelectorAll(".course-btn");
  const courseTitle = document.getElementById("courseTitle");
  const courseContent = document.getElementById("courseContent");

  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
      card.addEventListener('mouseover', () => {
          card.style.transform = 'scale(1.1) rotate(5deg)';
      });
      card.addEventListener('mouseout', () => {
          card.style.transform = 'scale(1) rotate(0deg)';
      });
  });

  function fetchQuote() {
      const quotes = ["Il y a 10 types de personnes dans le monde : ceux qui comprennent le binaire et ceux qui ne le comprennent pas.", "Un programmeur est une machine qui transforme le café en code.", "Je ne suis pas antisocial, je suis juste en mode débogage.", "Pourquoi les programmeurs préfèrent-ils la nuit ? Parce que le temps de compilation est plus court.", "Le code, c'est comme l'humour. Quand on doit l'expliquer, c'est mauvais."];
      const quoteContent = document.getElementById('quote-content');
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteContent.textContent = randomQuote;
  }

  setInterval(fetchQuote, 10000);
 
  
  const animatedElements = document.querySelectorAll('.skill-card, .section-title, .objectives-list li');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeInUp');
          }
      });
  }, {threshold: 0.1});
  animatedElements.forEach(element => {
      observer.observe(element);
  });


  // loadExperiences();
  loadSkills();
  loadProjects();
  //smoothScroll();
  fetchQuote();
  setSlide("slide-photo");
  //setSlide("congres");
  
});

function setSlide (slide) { 
  window.current_article=slide;
  const hero = document.getElementById('hero');
  const article = document.getElementById(window.current_article).innerHTML;
  hero.innerHTML=article;
} 