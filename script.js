// Load dynamic content from config.json
fetch('data/config.json')
    .then(response => response.json())
    .then(data => {
        // Social Links
        const socialLinks = document.getElementById('social-links');
        data.socialLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.className = 'social-link';
            anchor.href = link.url;
            anchor.innerHTML = `
                <i class="${link.icon}"></i>
                ${link.name}
            `;
            anchor.target = '_blank';
            socialLinks.appendChild(anchor);
        });

        // Projects Grid
        const projectsGrid = document.getElementById('projects-grid');
        data.projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="assets/images/${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));