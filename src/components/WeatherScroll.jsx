import ThermometerIcon from "@mui/icons-material/Thermostat";
import CloudIcon from "@mui/icons-material/Cloud";
import SunIcon from "@mui/icons-material/Sunny";
import RainIcon from "@mui/icons-material/Umbrella";
import ThunderIcon from "@mui/icons-material/Thunderstorm";
import FogIcon from "@mui/icons-material/Foggy";
import SnowIcon from "@mui/icons-material/Snowing";
import SleetIcon from "@mui/icons-material/CloudySnowing";
import NightIcon from "@mui/icons-material/Bedtime";

export default function WeatherScroll({ snapStyle, type, time24h, temperature24h, symbolCode24h, sunriseSunsetData, date, tempDaily, symbolCodeDaily }) {

    let smallInfoStyles = {
        common: "text-[var(--anti-flash-white-500)] font-light text-sm w-[45px] h-[70px]",
    }

    let WeatherIcon = ThermometerIcon;
    let isNighttime = false;

    // changing the icon depending on sunrise/sunset time + check for polar day/night

    let sunriseTime = '--:--';
    let sunsetTime = '--:--';

    if (time24h && sunriseSunsetData?.results?.sunrise && sunriseSunsetData?.results?.sunset) {
        try {
            const currentTime = parseInt(time24h.replace(':', ''));
            sunriseTime = parseInt(sunriseSunsetData.results.sunrise.slice(0, 5).replace(':', ''));
            sunsetTime = parseInt(sunriseSunsetData.results.sunset.slice(0, 5).replace(':', ''));

            isNighttime = (currentTime < sunriseTime) || (currentTime > sunsetTime);
        } catch (error) {
            isNighttime = false;
        }
    }

    const symbolCode = type === 'daily' ? symbolCodeDaily : symbolCode24h;

    if (isNighttime) {
        WeatherIcon = NightIcon;
    } else if (typeof symbolCode === 'string') {
        switch (true) {
            case symbolCode.includes("rain"):
            case symbolCode.includes("showers"):
                WeatherIcon = RainIcon;
                break;
            case symbolCode.includes("snow"):
                WeatherIcon = SnowIcon;
                break;
            case symbolCode.includes("fog"):
                WeatherIcon = FogIcon;
                break;
            case symbolCode.includes("cloud"):
            case symbolCode.includes("partly"):
            case symbolCode.includes("overcast"):
                WeatherIcon = CloudIcon;
                break;
            case symbolCode.includes("thunder"):
                WeatherIcon = ThunderIcon;
                break;
            case symbolCode.includes("clear"):
            case symbolCode.includes("fair"):
                WeatherIcon = SunIcon;
                break;
            case symbolCode.includes("sleet"):
                WeatherIcon = SleetIcon;
                break;
            default:
                WeatherIcon = ThermometerIcon;
        }
    }



    return (
        <div className={`${smallInfoStyles.common} flex flex-col items-center justify-between ${snapStyle} scrollbar-hide`}>
            <div className="whitespace-nowrap">{type === "daily" ? date : time24h}</div>
            <div>{type === "daily" ? tempDaily : temperature24h} °C</div>
            <div><WeatherIcon /></div>
        </div>
    )
}