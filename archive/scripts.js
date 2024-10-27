document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("courseModal");
    const closeBtn = document.querySelector(".close");
    const courseButtons = document.querySelectorAll(".course-btn");
    const courseTitle = document.getElementById("courseTitle");
    const courseContent = document.getElementById("courseContent");
    courseButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const skill = this.parentElement.parentElement.parentElement.getAttribute("data-skill");
            openModal(skill);
        });
    });
    closeBtn.onclick = function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    };
    function openModal(skill) {
        const courses = {
            python: {
                title: "Cours de Développement Python",
                content: "Découvrez les fondamentaux de Python, de la syntaxe de base aux concepts avancés comme la programmation orientée objet et les bibliothèques populaires.",
                topics: ["Variables et types de données", "Structures de contrôle", "Fonctions et modules", "Programmation orientée objet", "Bibliothèques populaires (NumPy, Pandas, Matplotlib)"]
            },
            linux: {
                title: "Cours d'Administration Linux",
                content: "Apprenez à gérer des systèmes Linux, de l'installation à la configuration avancée, en passant par la gestion des utilisateurs et la sécurité.",
                topics: ["Installation et configuration de base", "Gestion des utilisateurs et des permissions", "Administration du système", "Scripting shell", "Sécurité et pare-feu"]
            },
            database: {
                title: "Cours sur les Bases de Données",
                content: "Explorez les concepts des bases de données relationnelles et NoSQL, y compris la conception, l'optimisation et l'administration.",
                topics: ["Modélisation de données", "SQL", "Conception de schémas", "Optimisation des requêtes", "Bases de données NoSQL"]
            },
            graphics: {
                title: "Cours de Graphisme",
                content: "Maîtrisez les outils de création graphique et les principes de design pour créer des visuels impactants pour le web et l'impression.",
                topics: ["Théorie des couleurs", "Composition", "Typographie", "Outils de conception graphique", "Design pour le web et l'impression"]
            },
            webdesign: {
                title: "Cours de Web Design",
                content: "Apprenez à créer des sites web attrayants et fonctionnels, en utilisant HTML, CSS et JavaScript, ainsi que les principes de l'UX/UI design.",
                topics: ["HTML5 et CSS3", "Responsive design", "JavaScript et frameworks front-end", "Principes de l'UX/UI", "Optimisation des performances"]
            },
            javascript: {
                title: "Cours de Développement JavaScript",
                content: "Maîtrisez JavaScript pour le développement front-end et back-end, y compris les frameworks modernes et les concepts avancés.",
                topics: ["Syntaxe et concepts de base", "Manipulation du DOM", "AJAX et Fetch API", "ES6+ et fonctionnalités modernes", "Frameworks front-end (React, Vue, Angular)", "Node.js pour le back-end"]
            }
        };
        courseTitle.textContent = courses[skill].title;
        courseContent.innerHTML = `<p>${courses[skill].content}</p><h3>Sujets couverts :</h3><ul>${courses[skill].topics.map(topic => `<li>${topic}</li>`).join('')}</ul>`;
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    };
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1) rotate(5deg)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    ScrollReveal().reveal('.section', {delay: 300, distance: '50px', duration: 500, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)'});
    const competenceItems = document.querySelectorAll('.competence-item');
    competenceItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1) rotate(5deg)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    smoothScroll();
    function smoothScroll() {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                window.scrollTo({top: targetElement.offsetTop - 80, behavior: 'smooth'});
            });
        });

    }
    var typed = new Typed('#typed', {
        strings: ["Développeur Python passionné", "Expert en administration Linux", "Spécialiste des bases de données", "Graphiste créatif", "Web Designer innovant", "Futur Data Analyst", "Aspirant en IA"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
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
    var fab = document.querySelector('.fab');
    fab.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    /* particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    }); */
    
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
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
        item.classList.add('animate-fadeInUp');
    });
    ScrollReveal().reveal('.section, .timeline-item', {delay: 200, distance: '50px', duration: 1000, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)'});
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('image-modal');
            modal.innerHTML = `<span class="close-modal">&times;</span><img src="${img.src}" alt="${img.alt}">`;
            document.body.appendChild(modal);
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
        });
    });
    const handleImageError = (img) => {
        img.onerror = function() {
            this.style.display = 'none';
            console.log('Failed to load image:', this.src);
        };
    };
    document.querySelectorAll('img').forEach(handleImageError);

    loadExperiences();
    loadSkills();
    loadProjects();
    smoothScroll();
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
                    <h3>${skill.type}</h3>
                    <p>${skill.description}</p>
                    <a href="${skill.url}" class="skill-link">En savoir plus</a>
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

function loadProjects() {
    const projectsContainer = document.getElementById('SK-projets');
    
    // Vérifiez si la balise SK-projets existe
    if (!projectsContainer) {
        console.error('Error: Element with ID "SK-projets" not found.');
        return;
    }

    fetch('./web/projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'skill-card floating';
                projectCard.setAttribute('data-tilt', '');
                projectCard.setAttribute('data-tilt-max', '10');

                projectCard.innerHTML = `
                    <div class="skill-icon">
                        <img src="${project.icon}" alt="${project.name} icon">
                    </div>
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.url}" class="skill-link">En savoir plus</a>
                `;

                projectsContainer.appendChild(projectCard);
            });

            // Initialiser Vanilla Tilt après avoir ajouté les cartes
            VanillaTilt.init(document.querySelectorAll(".floating"), {
                max: 10,
                speed: 400
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}

function loadExperiences() {
    const timelineContainer = document.getElementById('timeline_experience');
    
    // Vérifiez si la balise imeline_expérience existe
    if (!timelineContainer) {
        console.error('Error: Element with ID "imeline_expérience" not found.');
        return;
    }

    fetch('./web/experiences.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(experience => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';

                const tasksList = experience.tasks.map(task => `<li>${task}</li>`).join('');

                timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <h3>${experience.startYear} - ${experience.endYear}</h3>
                        <h4>${experience.position}</h4>
                        <ul>${tasksList}</ul>
                    </div>
                `;

                timelineContainer.appendChild(timelineItem);
            });
        })
        .catch(error => console.error('Error loading experiences:', error));
}

VanillaTilt.init(document.querySelectorAll(".skill-card"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

VanillaTilt.init(document.querySelectorAll(".floating"), {
    max: 10,
    speed: 400
});