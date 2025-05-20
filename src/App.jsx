import { useState } from 'react'
import Place from './components/Place';
import Search from './components/Search';
import MainPart from './components/MainPart';
import Details from './components/Details';
import WeatherScroll from "./components/WeatherScroll";
import './App.css';
import "./index.css";
import ThermometerIcon from "@mui/icons-material/Thermostat";


function App() {

  const [showSearch, setShowSearch] = useState(false);
  const [searchedPlace, setSearchedPlace] = useState("Search place");
  const [weatherData, setWeatherData] = useState(null);
  const [sunriseSunsetData, setSunriseSunsetData] = useState(null);

  let WeatherIcon = ThermometerIcon;

  function handleShowSearch(placeName, weatherDataApi, sunriseSunsetData) {
    if (placeName) {
      setSearchedPlace(placeName);
      setWeatherData(weatherDataApi);
      setSunriseSunsetData(sunriseSunsetData);
    }
    setShowSearch(prevShowSearch => !prevShowSearch);
  }

  const [showDetails, setShowDetails] = useState(false);
  function handleDetails(e) {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };

  // getting forecast data for next days
  function getDailyForecast() {
    if (!weatherData?.properties?.timeseries) return [];

    let filterForecastDataDaily = weatherData.properties.timeseries.filter((item) => {
      let hour = new Date(item.time).getUTCHours();
      return hour === 12;
    })

    let mapForecastDataDaily = filterForecastDataDaily.map((item, index) => {
      const date = new Date(item.time);
      const day = date.getUTCDate();
      const month = date.toLocaleString('en-GB', { month: 'short' });

      return {
        date: `${day} ${month}`,
        temperature: Math.round(item.data.instant.details.air_temperature),
        symbolCode: item.data?.next_6_hours?.summary?.symbol_code || WeatherIcon,
        index
      };
    });

    return mapForecastDataDaily;
  }

  // getting forecast data for next 24h
  function getHourlyForecast() {
    if (!weatherData?.properties?.timeseries) return [];

    let first24Hours = weatherData.properties.timeseries.slice(0, 24);
    let forecastData24h = first24Hours.map((item, index) => {
      let time24h = new Date(item.time).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      let temperature24h = Math.round(item.data.instant.details.air_temperature);
      let symbolCode24h = item.data.next_1_hours.summary.symbol_code;
      return { time24h, temperature24h, symbolCode24h, index }
    }
    );
    return forecastData24h;
  }



  // changing the background image based on the weather data and season
  function handleBackgroundImg() {
    if (!weatherData) {
      return "bg-[url('../public/img/sunset.jpg')]";
    }

    let symbolCode = weatherData.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
    let time = new Date(weatherData.properties.timeseries[0].time);
    let month = time.getMonth() + 1;

    let season = "";
    if (month >= 3 && month <= 5) {
      season = "spring";
    } else if (month >= 6 && month <= 8) {
      season = "summer";
    } else if (month >= 9 && month <= 11) {
      season = "autumn";
    } else {
      season = "winter";
    }

    if (symbolCode.includes("rain") || symbolCode.includes("showers")) {
      return season === 'spring' ? "bg-[url('../img/rainySpring.jpg')]" :
        season === 'summer' ? "bg-[url('../img/rainySummer.jpg')]" :
          season === 'autumn' ? "bg-[url('../img/rainyAutumn.jpg')]" :
            "bg-[url('../img/rainyWinter.jpg')]";
    } else if (symbolCode.includes("snow") || symbolCode.includes("sleet")) {
      return season === 'spring' ? "bg-[url('../img/snowySpring.jpg')]" :
        season === 'summer' ? "bg-[url('../img/snowySummer.jpg')]" :
          season === 'autumn' ? "bg-[url('../img/snowyAutumn.jpg')]" :
            "bg-[url('../img/snowyWinter.jpg')]";
    } else if (symbolCode.includes("fog")) {
      return season === 'spring' ? "bg-[url('../img/foggySpring.jpg')]" :
        season === 'summer' ? "bg-[url('../img/foggySummer.jpg')]" :
          season === 'autumn' ? "bg-[url('../img/foggyAutumn.jpg')]" :
            "bg-[url('../public/img/foggyWinter.jpg')]";
    } else if (symbolCode.includes("cloud") || symbolCode.includes("overcast")) {
      return season === 'spring' ? "bg-[url('../img/cloudySpring.jpg')]" :
        season === 'summer' ? "bg-[url('../img/cloudySummer.jpg')]" :
          season === 'autumn' ? "bg-[url('../img/cloudyAutumn.jpg')]" :
            "bg-[url('../public/img/cloudyWinter.jpg')]";
    } else if (symbolCode.includes("thunder")) {
      return season === 'spring' ? "bg-[url('../img/thunderSpring.jpg')]" :
        season === 'summer' ? "bg-[url('../img/thunderSummer.jpg')]" :
          season === 'autumn' ? "bg-[url('../img/thunderAutumn.jpg')]" :
            "bg-[url('../img/thunderWinter.jpg')]";
    } else if (symbolCode.includes("clear") || symbolCode.includes("partly") || symbolCode.includes("fair") || symbolCode.includes("sunny")) {
      return season === 'spring' ? "bg-[url('../img/sunnySpring.jpg')]" :
        season === 'summer' ? "bg-[url('../img/sunnySummer.jpg')]" :
          season === 'autumn' ? "bg-[url('../img/sunnyAutumn.jpg')]" :
            "bg-[url('../img/sunnyWinter.jpg')]";
    }
  }



  return (
    <div className={`${handleBackgroundImg()} min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center`}>
      <div className="container w-[320px] h-[600px] mx-auto pt-6 rounded-lg border-1 border-[#fafaff] bg-black/30 flex flex-col justify-between">
        <div className="px-4">
          <div className="flex flex-col max-w-[300px] justify-between">
            {showSearch ?
              <Search executeHandleShowSearch={handleShowSearch} /> :
              <Place executeHandleShowSearch={handleShowSearch} place={searchedPlace} />
            }

            {!showDetails ?
              <MainPart executeHandleDetails={handleDetails} weatherData={weatherData} /> :
              <Details executeHandleDetails={handleDetails} weatherData={weatherData} sunriseSunsetData={sunriseSunsetData} />
            }
          </div>
        </div>

        <div className="max-w-[320px] h-[190px] border-ghost_white/30 bg-black/20 flex items-center justify-center rounded-b-lg">
          <div className="flex flex-col space-between gap-[9px] pt-[9px]">
            <div className="w-[318px] h-[85px]  border-ghost_white/30 bg-black/40 flex items-center justify-center gap-5">
              <div className="relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto">
                {getDailyForecast().map((forecastDaily) => (
                  <WeatherScroll
                    type="daily"
                    snapStyle="shrink-0 snap-center"
                    key={forecastDaily.index}
                    date={forecastDaily.date}
                    tempDaily={forecastDaily.temperature}
                    symbolCodeDaily={forecastDaily.symbolCode}
                  />))}
              </div>
            </div>
            <div className="w-[318px] h-[85px]  border-ghost_white/30 bg-black/40 flex items-center justify-center gap-5 rounded-b-lg">
              <div className="relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto">
                {getHourlyForecast().map((forecastHourByHour) => (
                  <WeatherScroll
                    type="hourly"
                    snapStyle="shrink-0 snap-center"
                    key={forecastHourByHour.index}
                    time24h={forecastHourByHour.time24h}
                    temperature24h={forecastHourByHour.temperature24h}
                    symbolCode24h={forecastHourByHour.symbolCode24h}
                    sunriseSunsetData={sunriseSunsetData}
                  />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
