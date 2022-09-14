import axios from "axios"
const url = "https://cf5ag3fame.execute-api.us-east-1.amazonaws.com/Dev/"

const ratingService = {

    async getMovie(id,name, type, price){
        console.log({id,name,type,price})
        let data = await axios.get(url+'seecontent/', {params:{id, type}})
        console.log(data.data)
        if(data.data.length){
            return;
        }
        console.log(type)
        let createData = await axios.get(url + 'crearcontenido/', {params:{id,name,type,value:price}})
        console.log(createData.data)
    },

    async getRating(userId, mediaId,type){
        let data = await axios.get(url+ 'vercontenido/', {params:{user:userId, type,cont:mediaId}})
        console.log(data.data)
        return data.data
    },
    

    async createRating(mediaId, type , userId, rating){
        console.log(userId)
        let data = await axios.get(url+ 'calificarcontenido/', {params:{cont:mediaId, type, user:userId,cal:rating}})
        console.log(data.data)
    }

}

export default ratingService;