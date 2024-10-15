function showWeatherChart(long, lat) {
    const weatherApiUrl = 'https://www.7timer.info/bin/civil.php';
    const image = document.createElement('img');
    image.src = weatherApiUrl;
    image.alt = 'Weather Forecast Chart';
    document.body.appendChild(image);
}
showWeatherChart(113.17, 23.09);