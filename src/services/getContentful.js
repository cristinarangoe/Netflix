import { createClient } from "contentful";


const client = createClient({
    space: "mi2376gvz0ix",
    accessToken: "w9vRrb-dbEf6PABKv_ESQrYPXzSmPKSkA8eKd0wXrJk", // preview access token
    host: "preview.contentful.com" //contentful host
})

const useContentful = {

   async getData(){
    try {
        const movies = await client.getEntries({
          content_type: "pelicula",
          select: "fields"
          //order: "fields.edad"
        });
        const series = await client.getEntries({
            content_type: "serie",
            select: "fields"
            //order: "fields.edad"
          });
        return {movies: movies.items, series: series.items};
      } catch (error) {
        console.log(error);
      }
   }
}

export default useContentful;