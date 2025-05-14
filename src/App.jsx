import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import Place from './components/Place';
import Search from './components/Search';
import MainPart from './components/MainPart';
import Details from './components/Details';
import WeatherScroll from "./components/WeatherScroll";
import './App.css'
import getLocation from './api/getLocation';


function App() {

  const [showSearch, setShowSearch] = useState(false);
  const [searchedPlace, setSearchedPlace] = useState("Search place");

  function handleShowSearch(placeName) {
    if (placeName) {
      setSearchedPlace(placeName);
    }
    setShowSearch(prevShowSearch => !prevShowSearch);
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
              <Search executeHandleShowSearch={handleShowSearch} /> :
              <Place executeHandleShowSearch={handleShowSearch} place={searchedPlace} />
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
