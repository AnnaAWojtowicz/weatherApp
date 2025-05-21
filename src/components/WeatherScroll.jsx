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

    // changing the icon depending on sunrise/sunset time
    if (time24h && sunriseSunsetData?.results) {

        const currentTime = parseInt(time24h.replace(':', ''));
        const sunriseTime = parseInt(sunriseSunsetData.results.sunrise.slice(0, 5).replace(':', ''));
        const sunsetTime = parseInt(sunriseSunsetData.results.sunset.slice(0, 5).replace(':', ''));

        isNighttime = (currentTime < sunriseTime) || (currentTime > sunsetTime);
    }

    if (isNighttime) {
        WeatherIcon = NightIcon;
    }

    const symbolCode = type === 'daily' ? symbolCodeDaily : symbolCode24h;
    if (symbolCode && !isNighttime) {
        if (symbolCode.includes("rain")) {
            WeatherIcon = RainIcon;
        } else if (symbolCode.includes("snow")) {
            WeatherIcon = SnowIcon;
        }
        else if (symbolCode.includes("fog")) {
            WeatherIcon = FogIcon;
        }
        else if (symbolCode.includes("cloud")) {
            WeatherIcon = CloudIcon;
        }
        else if (symbolCode.includes("thunder")) {
            WeatherIcon = ThunderIcon;
        }
        else if (symbolCode.includes("clear")) {
            WeatherIcon = SunIcon;
        }
        else if (symbolCode.includes("partly")) {
            WeatherIcon = CloudIcon;
        }
        else if (symbolCode.includes("overcast")) {
            WeatherIcon = CloudIcon;
        }
        else if (symbolCode.includes("sleet")) {
            WeatherIcon = SleetIcon;
        }
        else if (symbolCode.includes("showers")) {
            WeatherIcon = RainIcon;
        }
        else if (symbolCode.includes("fair")) {
            WeatherIcon = SunIcon;
        }
    }

    return (
        <div className={`${smallInfoStyles.common} flex flex-col items-center justify-between ${snapStyle}`}>
            <div className="whitespace-nowrap">{type === "daily" ? date : time24h}</div>
            <div>{type === "daily" ? tempDaily : temperature24h} °C</div>
            <div><WeatherIcon /></div>
        </div>
    )
}