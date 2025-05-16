import ThermometerIcon from "@mui/icons-material/Thermostat";
import CloudIcon from "@mui/icons-material/Cloud";
import SunIcon from "@mui/icons-material/Sunny";
import RainIcon from "@mui/icons-material/Umbrella";
import ThunderIcon from "@mui/icons-material/Thunderstorm";
import FogIcon from "@mui/icons-material/Foggy";
import SnowIcon from "@mui/icons-material/Snowing";
import SleetIcon from "@mui/icons-material/CloudySnowing";
import ArrowDown from "@mui/icons-material/ArrowDropDown";
import getWeatherNow from "../api/getWeatherNow";

export default function MainPart({ executeHandleDetails, weatherData }) {

    let mainPartStyles = {
        common: "text-[var(--anti-flash-white-500)] font-light",
        twoLinesStyle: "flex flex-col items-center justify-center",
        mainTemp: "text-6xl",
    };

    // need to fix this part: when nothing is searched CurrencyYenTwoTone, it should show the weather for current position
    if (!weatherData) {
        return <div className="text-white text-center"></div>;
    }
    const temp = Math.round(weatherData.properties.timeseries[0].data.instant.details.
        air_temperature);
    const wind = Math.round(weatherData.properties.timeseries[0].data.instant.details.
        wind_speed);
    const percip = Math.round(weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount)

    let WeatherIcon = ThermometerIcon;
    let weatherIconCode = weatherData.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
    if (weatherIconCode.includes("rain")) {
        WeatherIcon = RainIcon;
    } else if (weatherIconCode.includes("snow")) {
        WeatherIcon = SnowIcon;
    }
    else if (weatherIconCode.includes("fog")) {
        WeatherIcon = FogIcon;
    }
    else if (weatherIconCode.includes("cloud")) {
        WeatherIcon = CloudIcon;
    }
    else if (weatherIconCode.includes("thunder")) {
        WeatherIcon = ThunderIcon;
    }
    else if (weatherIconCode.includes("clear")) {
        WeatherIcon = SunIcon;
    }
    else if (weatherIconCode.includes("partly")) {
        WeatherIcon = CloudIcon;
    }
    else if (weatherIconCode.includes("overcast")) {
        WeatherIcon = CloudIcon;
    }
    else if (weatherIconCode.includes("sleet")) {
        WeatherIcon = SleetIcon;
    }
    else if (weatherIconCode.includes("showers")) {
        WeatherIcon = RainIcon;
    }
    else if (weatherIconCode.includes("fair")) {
        WeatherIcon = SunIcon;
    }



    return (

        <div className="flex items-center justify-center">
            <div className="w-[290px] h-[290px] rounded-full border-ghost_white/30 bg-black/20 flex items-center justify-center">
                <div className="w-[270px] h-[270px] rounded-full border-ghost_white/30 bg-black/40 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className={`${mainPartStyles.common} ${mainPartStyles.tempIcon}`}><WeatherIcon sx={{ fontSize: "4rem" }} /></div>
                        <div>
                            <div className="flex items-center gap-5">
                                <span className={`${mainPartStyles.twoLinesStyle} text-sm`}><div className={`${mainPartStyles.common}`}>wind</div><div className={`${mainPartStyles.common}`}>{wind} m/s</div></span>
                                <span className={`${mainPartStyles.twoLinesStyle}`}><div className={`${mainPartStyles.common} ${mainPartStyles.mainTemp}`}>{temp}°C</div></span>
                                <span className={`${mainPartStyles.twoLinesStyle} text-sm`}><div className={`${mainPartStyles.common}`}>percip.</div><div className={`${mainPartStyles.common}`}>{percip} mm</div></span>
                            </div>
                            <div className={`${mainPartStyles.common} text-center`}>feels like 20°C</div>
                        </div>
                        <button className={`${mainPartStyles.twoLinesStyle}`} onClick={executeHandleDetails}>
                            <div className={`${mainPartStyles.common} text-sm`}>details</div>
                            <div className={`${mainPartStyles.common}`}><ArrowDown /></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}