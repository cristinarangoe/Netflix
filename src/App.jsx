import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useContentful from './services/getContentful'
import { useEffect } from 'react'
import MediaItem from './components/MediaItem'
import Inicio from './components/Inicio'

function App() {


  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState({});
  const [series, setSeries] = useState({});

  useEffect(()=>{
    const getMovies = async () =>{
      const data = await useContentful.getData()
      setMovies(data.movies);
      setSeries(data.series);
    } 
    getMovies()
    
  },[])

  return (
    <Inicio/>
  )
}

export default App
