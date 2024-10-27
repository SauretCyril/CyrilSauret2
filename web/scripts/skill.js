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
    // loadProjects();
    //smoothScroll();
    fetchQuote();
});


function loadSkills() {
    const skillsContainer = document.getElementById('SK-competences');
    
    // Vérifiez si la balise skills-grid existe
    if (!skillsContainer) {
        console.error('Error: Element with ID "skills-grid" not found.');
        return;
    }

    fetch('./web/skills.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(skill => {
                console.log(skill.description);
                const skillCard = document.createElement('div');
               
                skillCard.className = 'skill-card floating';
                skillCard.setAttribute('data-tilt', '');
                skillCard.setAttribute('data-tilt-max', '10');

                skillCard.innerHTML = `
                    <div class="skill-icon">
                        <img src="${skill.icon}" alt="${skill.type} logo">
                    </div>
                    <p>${skill.type}</p>
                    `;

                skillsContainer.appendChild(skillCard);
            });

            // Initialiser Vanilla Tilt après avoir ajouté les cartes
            VanillaTilt.init(document.querySelectorAll(".floating"), {
                max: 10,
                speed: 400
            });
        })
        .catch(error => console.error('Error loading skills:', error));
}


function fetchQuote() {
    const quotes = ["Il y a 10 types de personnes dans le monde : ceux qui comprennent le binaire et ceux qui ne le comprennent pas.", "Un programmeur est une machine qui transforme le café en code.", "Je ne suis pas antisocial, je suis juste en mode débogage.", "Pourquoi les programmeurs préfèrent-ils la nuit ? Parce que le temps de compilation est plus court.", "Le code, c'est comme l'humour. Quand on doit l'expliquer, c'est mauvais."];
    const quoteContent = document.getElementById('quote-content');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContent.textContent = randomQuote;
}
    fetchQuote();
    setInterval(fetchQuote, 10000);
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const headerLogo = document.getElementById('header-logo');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            headerLogo.style.filter = 'brightness(1.2)';
        } else {
            header.classList.remove('scrolled');
            headerLogo.style.filter = 'none';
        }
    });