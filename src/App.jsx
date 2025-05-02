import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import City from './components/City';
import Search from './components/Search';
import MainPart from './components/MainPart';
import Details from './components/Details';
import './App.css'


function App() {

  const [showSearch, setShowSearch] = useState(true)
  function handleShowSearch(e) {
    setShowSearch(prevShowSearch => !prevShowSearch);
  }

  const [showSeachedCity, setShowSearchedCity] = useState("");
  function handleShowSearchedCity(e) {
    setShowSearchedCity(e.target.value);
  }


  return (

    <div className="bg-[url('../public/img/billy-huynh-v9bnfMCyKbg-unsplash.jpg')] min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="container max-w-[320px] h-[600px] mx-auto px-4 py-8 rounded-lg border-1 border-[#fafaff] bg-black/10">
        <div className="flex flex-col max-w-[300px] justify-between">
          {showSearch ?
            <City executeHandleShowSearch={handleShowSearch} city={showSeachedCity} /> :
            <Search value={showSeachedCity} onChange={handleShowSearchedCity} executeHandleShowSearch={handleShowSearch} />
          }
          <MainPart />
          <Details />
        </div>
      </div>

    </div>

  )
}

export default App
