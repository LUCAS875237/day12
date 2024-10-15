document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const datasetUrl = 'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv';

        let response = await fetch(datasetUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        let data = await response.text();

        document.getElementById('temperatureData').textContent = data;
    } catch (error) {
        console.error('An error occurred:', error);
        document.getElementById('temperatureData').textContent = 'Failed to load data';
    }
});
