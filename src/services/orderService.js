import axios from "axios";
const url = 'https://cf5ag3fame.execute-api.us-east-1.amazonaws.com/Dev/'
const orderService ={
    

    async saveOrder(items, userData){
        let media =[]
        items.map((item)=>{
            media.push({id: item.id, price:item.price, type:item.type})
        })
        let data = {usuariosId: userData.username, content: media}
        console.log(data)
        const response = await axios.post(url+'comprarcontenido/', data);
        return response.data[0].Saved;
    },

    async getMediaBoughtStatus(userId, mediaId, type){
        console.log({userId,mediaId,type})
        const data = await axios.get(url + 'escomprada/', {params:{userId,type,mediaId}})
        console.log(data.data[0].esComprada)
        return data.data[0].esComprada

    }

    
    
  
}

export default orderService;
