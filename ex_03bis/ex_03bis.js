let currentPage = 1;
let totalPages = 1;

function showPlanetInfo(planets) {
    const planetListElement = document.getElementById('planet-list');
    planetListElement.innerHTML = '';
    planets.forEach(planet => {
        const listItemElement = document.createElement('li');
        listItemElement.classList.add('planet');
        listItemElement.innerHTML = `
            <h2>${planet.name}</h2>
            <p><strong>Diameter:</strong> ${planet.diameter}</p>
            <p><strong>Climate:</strong> ${planet.climate}</p>
            <p><strong>Terrain:</strong> ${planet.terrain}</p>
            <p><strong>Population:</strong> ${planet.population}</p>
        `;
        planetListElement.appendChild(listItemElement);
    });
}

function fetchPlanets(page = 1) {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
        .then(response => response.json())
        .then(data => {
            showPlanetInfo(data.results);
            totalPages = Math.ceil(data.count / 10);
            updateButtons();
        })
        .catch(error => console.error('Error fetching planet data:', error));
}

function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPlanets(currentPage);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetchPlanets(currentPage);
    }
});

document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    fetch(`https://swapi.dev/api/planets/?search=${query}`)
        .then(response => response.json())
        .then(data => {
            showPlanetInfo(data.results);
        })
        .catch(error => console.error('Error fetching planet data:', error));
});

fetchPlanets(currentPage);
