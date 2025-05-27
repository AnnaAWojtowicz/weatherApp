

export default async function getWeatherNow({ lat, lon }) {

    const getWeatherApi = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;

    try {
        const response = await fetch(getWeatherApi, {
            method: 'GET',
            headers: {
                'User-Agent': 'weatherApp/1.0 github.com/yourusername/weatherApp',
                'Accept': 'application/json',
                'Origin': window.location.origin

            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherNowData = await response.json();
        console.log('met data:', weatherNowData);
        return weatherNowData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}