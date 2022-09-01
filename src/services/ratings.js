import axios from "axios"
const url = "https://cf5ag3fame.execute-api.us-east-1.amazonaws.com/Dev/seecontent?id=pelicula&type=movie"

const ratingService = {

    async viewRating(id, type){
        let data = await axios.get(url, {params:{id, type}})
        console.log(data.data)
    },

    async ratingExists() {

    },

    async createRating(){

    }

}

export default ratingService;