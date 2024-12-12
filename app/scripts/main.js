import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import './Menu.css';

const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
    </div>
  );
};

const Menu = ({ setActiveArticle }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveItem(activeItem === item ? null : item);
  };

  const handleSubmenuClick = (e, articleId) => {
    e.preventDefault();
    setActiveArticle(articleId);
  };

  return (
    <nav>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#organiser" className="nav-link" onClick={(e) => handleNavClick(e, 'organiser')}>
            <i className="fas fa-calendar-plus"></i> Organiser
          </a>
          <ul className={`submenu ${activeItem === 'organiser' ? 'active' : ''}`}>
            <li className="submenu-item">
              <a href="#Ici3Dn" className="submenu-link" onClick={(e) => handleSubmenuClick(e, 'Ici3Dn')}>
                <i className="fas fa-microphone submenu-icon"></i> Ici3Dn
              </a>
            </li>
            <li className="submenu-item">
              <a href="#salons" className="submenu-link" onClick={(e) => handleSubmenuClick(e, 'salons')}>
                <i className="fas fa-booth submenu-icon"></i> Salons & Expositions
              </a>
            </li>
            <li className="submenu-item">
              <a href="#sports" className="submenu-link" onClick={(e) => handleSubmenuClick(e, 'sports')}>
                <i className="fas fa-running submenu-icon"></i> Événements Sportifs
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Slideshow;
export { Menu };

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

import React, { useState } from 'react';
import Slideshow from './Slideshow';
import Menu from './Menu';
import './MainContent.css';

const MainContent = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div className="main-content">
      {!activeArticle && <Slideshow />}
      <Menu setActiveArticle={setActiveArticle} />
      <div className="articles">
        <article id="Ici3Dn" className={`article ${activeArticle === 'Ici3Dn' ? 'active' : ''}`}>
          <h2>Ici3Dn</h2>
          <p>Contenu de l'article Ici3Dn...</p>
        </article>
        <article id="salons" className={`article ${activeArticle === 'salons' ? 'active' : ''}`}>
          <h2>Salons & Expositions</h2>
          <p>Contenu de l'article Salons & Expositions...</p>
        </article>
        <article id="sports" className={`article ${activeArticle === 'sports' ? 'active' : ''}`}>
          <h2>Événements Sportifs</h2>
          <p>Contenu de l'article Événements Sportifs...</p>
        </article>
      </div>
    </div>
  );
};

export default MainContent;