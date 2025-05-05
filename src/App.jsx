import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import City from './components/City';
import Search from './components/Search';
import MainPart from './components/MainPart';
import Details from './components/Details';
import WeatherScroll from "./components/WeatherScroll";
import './App.css'


function App() {

  let footerStyles = {
    common: ""
  };



  const [showSearch, setShowSearch] = useState(true)
  function handleShowSearch(e) {
    setShowSearch(prevShowSearch => !prevShowSearch);
  }

  const [showSeachedCity, setShowSearchedCity] = useState("");
  function handleShowSearchedCity(e) {
    setShowSearchedCity(e.target.value);
  }

  const [showDetails, setShowDetails] = useState(false);
  function handleDetails(e) {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };



  return (

    <div className="bg-[url('../public/img/billy-huynh-v9bnfMCyKbg-unsplash.jpg')] min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="container w-[320px] h-[600px] mx-auto pt-6 rounded-lg border-1 border-[#fafaff] bg-black/10 flex flex-col justify-between">
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
            <div className="w-[318px] h-[85px] border-ghost_white/30 bg-black/40 flex items-center justify-center gap-5">
              <WeatherScroll />
              <WeatherScroll />
              <WeatherScroll style="border border-[var(--anti-flash-white-500)] rounded-lg p-1" />
              <WeatherScroll />
              <WeatherScroll />
            </div>
            <div className="w-[318px] h-[85px]  border-ghost_white/30 bg-black/40 flex items-center justify-center gap-5 rounded-b-lg"><WeatherScroll />
              <WeatherScroll />
              <WeatherScroll style="border border-[var(--anti-flash-white-500)] rounded-lg p-1" />
              <WeatherScroll />
              <WeatherScroll /></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
