function loadProjects() {
    const projectsContainer = document.getElementById('SK-projects');
    
    // Vérifiez si la balise SK-projets existe
    if (!projectsContainer) {
        console.error('Error: Element with ID "SK-projects" not found.');
        return;
    }

    fetch('./web/projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                fileExists(project.url).then((is) =>
                {
                    if (is) {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'skill-card floating';
                    projectCard.setAttribute('data-tilt', '');
                    projectCard.setAttribute('data-tilt-max', '10');
                    projectCard.onclick = ( ) => loadArticle(project.url);

                    projectCard.innerHTML = `
                        <div class="skill-icon">
                            <img src="${project.icon}" alt="${project.name} icon">
                        </div>
                        <p>${project.name}</p>
                        
                    `;

                    projectsContainer.appendChild(projectCard);
                }
            });
        });

            // Initialiser Vanilla Tilt après avoir ajouté les cartes
            VanillaTilt.init(document.querySelectorAll(".floating"), {
                max: 10,
                speed: 400
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}
