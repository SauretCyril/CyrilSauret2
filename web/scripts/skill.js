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
                skillCard= addOneSkill(skill);
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


function addOneSkill(skill) {
    
    console.log(skill.description);
    const skillCard = document.createElement('div');
   
    skillCard.className = 'skill-card floating';
    skillCard.setAttribute('data-tilt', '');
    skillCard.setAttribute('data-tilt-max', '10');
    
        skillCard.innerHTML = `
        <div class="skill-icon id='${skill.type}'">
            <img src="${skill.icon}" alt="${skill.type} logo">
        </div>
        <p>${skill.type}</p>
        `;
        skillCard.onclick = () => {
            goSkill(skill);
          };
    return  skillCard;
    
} 

function addOneSkillreturn() {
    const skillCard = document.createElement('div');
   
    skillCard.className = 'skill-card floating';
    //skillCard.setAttribute('data-tilt', '');
    //skillCard.setAttribute('data-tilt-max', '10');
    
        skillCard.innerHTML = `
        <div class="skill-icon">
            <img src="./web/ressources/return.png" alt="Home"} logo">
        </div>
        `;
        skillCard.onclick = () => {
            setSlide("slide-photo");
          };
    return  skillCard;
    
} 


function fetchQuote() {
    const quotes = ["Il y a 10 types de personnes dans le monde : ceux qui comprennent le binaire et ceux qui ne le comprennent pas.", "Un programmeur est une machine qui transforme le café en code.", "Je ne suis pas antisocial, je suis juste en mode débogage.", "Pourquoi les programmeurs préfèrent-ils la nuit ? Parce que le temps de compilation est plus court.", "Le code, c'est comme l'humour. Quand on doit l'expliquer, c'est mauvais."];
    const quoteContent = document.getElementById('quote-content');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContent.textContent = randomQuote;
}
    fetchQuote();
    setInterval(fetchQuote, 10000);
   /*  window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const headerLogo = document.getElementById('header-logo');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            headerLogo.style.filter = 'brightness(1.2)';
        } else {
            header.classList.remove('scrolled');
            headerLogo.style.filter = 'none';
        }
    }); */

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

function goSkill(skill) {
    if (!skill) {
        console.error('Error: skill is null or undefined.');
        return;
    }

    const heroElement = document.getElementById('hero');
    if (!heroElement) {
        console.error('Error: Element with id "hero" not found.');
        return;
    }

    heroElement.innerHTML = `
    <article id="skill-python" class="article active">
        <div class="article-header">
            <h1>${skill.title}</h1>
            <p>${skill.description}</p>
        </div>
        <div class="article-content">
            <img src="https://picsum.photos/800/400?random=9" alt="" class="article-image">
            
            <ul>
                <li>Surface adaptée aux sports collectifs</li>
                <li>Gradins mobiles</li>
                <li>Vestiaires équipés</li>
                <li>Sonorisation professionnelle</li>
                <li>Éclairage adapté aux retransmissions</li>
            </ul>
        </div>
    </article>`;
}