import  { BASE_URL, ACCESS_TOKEN } from '../services/contentfulHelper';
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr'


export default  function useContentfulGenres () {
    const { data, error } = useSWR([`${BASE_URL}/entries?content_type=genre`,{
        headers:{
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
    }],fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

