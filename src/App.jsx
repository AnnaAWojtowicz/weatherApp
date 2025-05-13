import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import City from './components/City';
import Search from './components/Search';
import MainPart from './components/MainPart';
import Details from './components/Details';
import WeatherScroll from "./components/WeatherScroll";
import './App.css'
import getLocation from './api/getLocation';


function App() {

  let footerStyles = {
    common: ""
  };

  const [showSearch, setShowSearch] = useState(true)
  function handleShowSearch(e) {
    setShowSearch(prevShowSearch => !prevShowSearch);
  }

  const [showSeachedCity, setShowSearchedCity] = useState("");
  async function handleShowSearchedCity(e) {
    const place = e.target.value;
    setShowSearchedCity(place);

    try {
      const locationData = await getLocation({ place });
      console.log('Location data:', locationData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const [showDetails, setShowDetails] = useState(false);
  function handleDetails(e) {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };



  return (

    <div className="bg-[url('../public/img/thunderSpring.jpg')] min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="container w-[320px] h-[600px] mx-auto pt-6 rounded-lg border-1 border-[#fafaff] bg-black/30 flex flex-col justify-between">
        <div className="px-4">
          <div className="flex flex-col max-w-[300px] justify-between">
            {showSearch ?
              <City executeHandleShowSearch={handleShowSearch} city={showSeachedCity} /> :
              <Search value={showSeachedCity} onChange={handleShowSearchedCity} executeHandleShowSearch={handleShowSearch} />
            }

            {!showDetails ?
              <MainPart executeHandleDetails={handleDetails} /> :
              <Details executeHandleDetails={handleDetails} />
            }
          </div>
        </div>

        <div className="max-w-[320px] h-[190px] border-ghost_white/30 bg-black/20 flex items-center justify-center rounded-b-lg">
          <div className="flex flex-col space-between gap-[9px] pt-[9px]">
            <div className="w-[318px] h-[85px]  border-ghost_white/30 bg-black/40 flex items-center justify-center gap-5">
              <div className="relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto">
                {/* use mapping here! */}
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />

              </div>
            </div>
            <div className="w-[318px] h-[85px]  border-ghost_white/30 bg-black/40 flex items-center justify-center gap-5 rounded-b-lg">
              <div className="relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto">
                {/* use mapping here! */}
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
                <WeatherScroll snapStyle="shrink-0 snap-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
