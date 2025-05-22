import Feels from 'feels';

export function calculateFeelsLike(temperature, humidity, windSpeed) {
    const config = {
        temp: temperature,
        humidity: humidity,
        speed: windSpeed,
        units: {
            temp: 'c',
            speed: 'mps'
        }
    };

    try {
        const feelsLike = new Feels(config).like();
        return Math.round(feelsLike);
    } catch (error) {
        console.error('Error calculating feels like temperature:', error);
        return temperature;
    }
}