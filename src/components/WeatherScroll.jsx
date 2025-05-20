import ThermometerIcon from "@mui/icons-material/Thermostat";
import CloudIcon from "@mui/icons-material/Cloud";
import SunIcon from "@mui/icons-material/Sunny";
import RainIcon from "@mui/icons-material/Umbrella";
import ThunderIcon from "@mui/icons-material/Thunderstorm";
import FogIcon from "@mui/icons-material/Foggy";
import SnowIcon from "@mui/icons-material/Snowing";
import SleetIcon from "@mui/icons-material/CloudySnowing";
import NightIcon from "@mui/icons-material/Bedtime";

export default function WeatherScroll({ snapStyle, time24h, temperature24h, symbolCode24h }) {

    let smallInfoStyles = {
        common: "text-[var(--anti-flash-white-500)] font-light text-sm w-[45px] h-[70px]",
    }

    // changing the icon depending on sunrise/sunset time


    let WeatherIcon = ThermometerIcon;
    if (symbolCode24h) {
        if (symbolCode24h.includes("rain")) {
            WeatherIcon = RainIcon;
        } else if (symbolCode24h.includes("snow")) {
            WeatherIcon = SnowIcon;
        }
        else if (symbolCode24h.includes("fog")) {
            WeatherIcon = FogIcon;
        }
        else if (symbolCode24h.includes("cloud")) {
            WeatherIcon = CloudIcon;
        }
        else if (symbolCode24h.includes("thunder")) {
            WeatherIcon = ThunderIcon;
        }
        else if (symbolCode24h.includes("clear")) {
            WeatherIcon = SunIcon;
        }
        else if (symbolCode24h.includes("partly")) {
            WeatherIcon = CloudIcon;
        }
        else if (symbolCode24h.includes("overcast")) {
            WeatherIcon = CloudIcon;
        }
        else if (symbolCode24h.includes("sleet")) {
            WeatherIcon = SleetIcon;
        }
        else if (symbolCode24h.includes("showers")) {
            WeatherIcon = RainIcon;
        }
        else if (symbolCode24h.includes("fair")) {
            WeatherIcon = SunIcon;
        }
    }

    return (
        <div className={`${smallInfoStyles.common} flex flex-col items-center justify-between ${snapStyle}`}>
            <div className="whitespace-nowrap">{time24h}</div>
            <div>{temperature24h} °C</div>
            <div><WeatherIcon /></div>
        </div>
    )
}