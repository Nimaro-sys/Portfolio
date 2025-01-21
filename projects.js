// Charger les projets dynamiquement depuis un fichier JSON
async function loadProjects() {
    try {
        const response = await fetch('./data/projects.json'); // Charger le fichier JSON
        const projects = await response.json();
        const container = document.getElementById('projects-container');

        // Générer les cartes projets
        projects.forEach(project => {
            const card = `
                <article class="rounded-xl border border-gray-700 bg-gray-800 p-6 flex flex-col md:flex-row w-full max-w-4xl mx-auto">
                    <div class="flex-1 md:mr-6">
                        <div class="flex items-center gap-4">
                            <img src="./images/RomainPp.png" alt="Avatar" class="h-16 w-16 rounded-full p-2">
                            <div>
                                <h3 class="text-lg font-medium text-white">Romain</h3>
                                <p class="text-sm text-gray-300">Développeur Web Junior</p>
                            </div>
                        </div>
                        <hr class="my-4 border-gray-700 border-t-2 p-4">
                        <strong class="text-white">${project.name}</strong>
                        <ul>
                            <li>
                                <a href="${project.link}" class="block rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                                    <p class="text-gray-300 text-sm mt-1">${project.description}</p>
                                    <p class="text-blue-300 text-sm mt-1 flex items-center">
                                        <img src="https://icongr.am/octicons/link-external.svg?size=20&color=93C5FD" class="mr-2"> Cliquez ici pour le voir
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center justify-center md:w-1/3">
                        <img src="${project.image}" alt="${project.alt}" class="object-cover rounded-lg shadow-lg h-full w-full">
                    </div>
                </article>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error('Erreur lors du chargement des projets :', error);
    }
}

// Charger les projets au chargement de la page
document.addEventListener('DOMContentLoaded', loadProjects);
