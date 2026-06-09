import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import stockGang from './assets/stock_gang.png'
import './App.css'
import { useEffect } from 'react';
import SearchBar from './components/SearchBar';
// import { Analytics } from "@vercel/analytics/next"


const Card = ({description, skibidi}) =>{
  const [fav, setFav] = useState(0);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("fav changed", skibidi);
  }, [fav]);
  return(
    <div 
    className="card" 
    onClick={() => setCount((count) => count + 1)}
    style={{border: fav ? "5px solid rgb(224, 219, 53)" : "2px solid rgb(22, 195, 253)"}}>
      <div
        style={{display:"flex" , alignItems:"center" , flexDirection:"column"}}>
        <h1> {skibidi}</h1>
        <p>{description}</p>
      </div>

      <div>
        <button 
          onClick={() => setFav((fav) => (fav + 1)%2)} 
          className="fav_button"
          style={{backgroundColor: fav ? "rgb( , 219, 53)" : "rgb(22, 195, 253)"}}>
          Favorite 
        </button>
        <p>Count: {count}</p>
      </div>
    </div>
  )
}
function App() 
{
  const [searchTerm, setSearchTerm] = useState("");
  return(
  <>
  <main>
    <header style={{marginTop: "100px"}}>
      <img src={stockGang} style={{width: "50%", height: "auto"}} alt="stock_gang"/>
      <h1 >Find your<b> generic </b>homo sapien</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  </main>
  {/* <Analytics /> */}
  </>
  )
}

export default App
