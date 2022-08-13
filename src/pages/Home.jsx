import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import useContentful from '../services/getContentful'
import { useEffect } from 'react'
import style from './Home.css'
import HomeNavBar from '../components/homeNavBar'
import { helpers } from '../generalHelpers/contentfulHelpers'
import { filterHelpers } from '../generalHelpers/filterHelpers'
import MediaDialog from '../components/MediaModal'

function Home() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();
  const [genres, setGenres] = useState({})

  useEffect(()=>{
    const getMedia = async () =>{
      const data = helpers.contentfulClean(await useContentful.getData())
      setGenres(filterHelpers.filterMediaByGenres(data))
      setMovies(data.movies);
      setSeries(data.series);
    } 
    getMedia()
    
  },[])

  return (
    <div className="home">
    
    <HomeNavBar/>
    <img className='featured'
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
      <button onClick={()=>{console.log({movies, series})}}>media</button>
      <button onClick={()=>{console.log(genres)}}>generos</button>
      {(movies && series) && <MediaDialog media = {movies[0]}/>}
    </div>
  )
}

export default Home
