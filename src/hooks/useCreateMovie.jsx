import { useEffect, useState } from "react"
import {createMovie} from '../utils/contentfulDataHelpers';


export default  function useCreateMovie (movieData) {
    const [data, setData] = useState(null);
    useEffect(()=>{
        createMovie(movieData).then(e => setData(e));
    });
    
    return {
        data,
        isLoading: !data,
    }
}