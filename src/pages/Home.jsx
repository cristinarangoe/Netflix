import { useState } from 'react'
import useContentful from '../services/getContentful'
import { useEffect } from 'react'
import HomeNavBar from '../components/HomeNavBar'
import { helpers } from '../generalHelpers/contentfulHelpers'
import { filterHelpers } from '../generalHelpers/filterHelpers'
import MediaDialog from '../components/MediaModal'
import MediaItem from '../components/MediaItem';
import Carrusel from '../components/Carrusel';

function Home() {
  const [contentfulMovies, setMovies] = useState();
  const [contentfulSeries, setSeries] = useState();
  const [isLoading, setLoading] = useState(true);
  // const [genres, setGenres] = useState();

  useEffect(()=>{
    // const getMedia = async () =>{
    //   const data = helpers.contentfulClean(await useContentful.getData())
    //   setMovies(data.movies);
    //   setSeries(data.series);
    // } 
    // getMedia()

    //traer los datos y limpiandolos
    useContentful.getData().then((data) => {
      const {movies, series} = helpers.contentfulClean(data);
      // setGenres(filterHelpers.filterMediaByGenres(data))
      setMovies(movies);
      setSeries(series);
      setLoading(false);
    })
    
  },[])

  if(isLoading){
    return (
      <h1>Loading.........</h1>
    )
  }
  return (
    <div className="bg-black/90 h-screen">
      <div className="z-10">
      <HomeNavBar/>
      </div>
      <div className="z-0">
      <Carrusel content={contentfulMovies} genre="Prueba1"/>
    <Carrusel content={contentfulMovies} genre="Prueba2"/>
    <Carrusel content={contentfulMovies} genre="Prueba3"/>
      </div>

    </div>

  )
}

export default Home
