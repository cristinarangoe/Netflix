import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import useContentful from '../services/getContentful'
import { useEffect } from 'react'
import MediaItem from '../components/MediaItem'
import style from './Home.css'
import HomeNavBar from '../components/homeNavBar'

function Home() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();

  useEffect(()=>{
    const getMovies = async () =>{
      const data = await useContentful.getData()
      setMovies(data.movies);
      setSeries(data.series);
    } 
    getMovies()
    
  },[])

  return (
    <div className="home">
    <HomeNavBar/>
    <img className='featured'
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
      
    </div>
  )
}

export default Home
