
export default async function getSunriseSunset({ lat, lon }) {

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const getSunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=${formattedDate}&formatted=0`;

    try {
        const response = await fetch(getSunriseSunsetApi);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const sunriseSunsetTodayData = await response.json();
        console.log('sunrise data:', sunriseSunsetTodayData);
        return sunriseSunsetTodayData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}
