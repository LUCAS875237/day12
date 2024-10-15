function showPlanetInfo(planet) {
    const planetListElement = document.getElementById('planet-list');
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
}

fetch('https://swapi.dev/api/planets/1/')
    .then(response => response.json())
    .then(data => {
        showPlanetInfo(data);
    })
    .catch(error => console.error('Error fetching planet data:', error));
