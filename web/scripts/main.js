window.current_article="slide-photo";
let slideshowInterval; // Move slideshowInterval to global scope
const articleContainer = document.getElementById('TheArticle');
const slideContainer = document.getElementById('slide-photo');
window.currentArticleView="";
$(document).ready(function() {
  // Slideshow functionality
  function nextSlide() {
    const $active = $('.hero-slide.active');
    const $next = $active.next('.hero-slide').length ? $active.next('.hero-slide') : $('.hero-slide').first();
    $active.removeClass('active');
    $next.addClass('active');
  }
  
  slideshowInterval = setInterval(nextSlide, 5000);
  
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

  setInterval(fetchQuote, 1000);
 
  
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
  goHome();
  //setSlide("congres");
  
});


function goHome() {
  document.getElementById('hero').innerHTML=`
        <div class="hero-slide active" style="background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://picsum.photos/1920/1080?random=1')"></div>
      <div class="hero-slide" style="background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://picsum.photos/1920/1080?random=2')"></div>
      <div class="hero-slide" style="background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://picsum.photos/1920/1080?random=3')"></div>
    `;
  
}

function loadArticle(file) {
  const articleContainer = document.getElementById('TheArticle');
 
  const theslide = document.getElementById('slide-photo');
  
  if (!articleContainer) {
      console.error('Error: Element with ID "TheArticle" not found.');
      return;
  }
 
  if (articleContainer.classList.contains('active') && window.currentArticleView===file) {
      hideArticleContainer();
  }
  else {
  console.log('Loading article:', file);
  fetch(file)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          if (theslide) {
              
              showArticleContainer();
          }
          articleContainer.innerHTML = data;
          window.currentArticleView=file;
          articleContainer.display = 'block';
           // Ensure the article container is active
          console.log('Article loaded successfully');
      })
      .catch(error => console.error('Error loading article:', error));
    }
}



function showArticleContainer() {
  articleContainer.classList.add('active');
  slideContainer.classList.add('hidden');
  $('.hero-slide').hide(); // Hide all slides */
  clearInterval(slideshowInterval);
  
}

// Function to hide articleContainer and show slideContainer
function hideArticleContainer() {
  articleContainer.classList.remove('active');
  slideContainer.classList.remove('hidden');
  $('.hero-slide').show(); // Show all slides
  setInterval(fetchQuote, 1000);
}

async function fileExists(url) {
  if (url===""){return false;}
  try {
      const response = await fetch(url, { method: 'HEAD' });
      
      return response.ok;
  } catch (error) {
      console.error('Error checking file existence:', error);
      return false;
  }
}

function set_quot_content_color(){
    const quoteContainer = document.querySelector('.quote-container');
    const activeSlide = document.querySelector('.hero-slide.active');

    if (activeSlide) {
        const backgroundImage = activeSlide.style.backgroundImage;
        const urlMatch = backgroundImage.match(/url\("([^"]+)"\)/);

        if (urlMatch && urlMatch[1]) {
            const imageUrl = urlMatch[1];

            const img = new Image();
            img.crossOrigin = 'Anonymous'; // Necessary to avoid CORS issues
            img.src = imageUrl;

            img.onload = () => {
                const colorThief = new ColorThief();
                const dominantColor = colorThief.getColor(img);
                const textColor = getContrastingColor(dominantColor);

                quoteContainer.style.color = textColor;
            };

            function getContrastingColor([r, g, b]) {
                // Calculate perceived luminance
                const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                return luminance > 0.5 ? 'black' : 'white'; // Return black or white based on luminance
            }
        } else {
            console.error('No valid URL found in backgroundImage');
        }
    }
}
