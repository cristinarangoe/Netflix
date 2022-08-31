import axios from "axios";

const orderService ={
    

    saveOrder(items, userData){
        let media =[]
        items.map((item)=>{
            media.push({id: item.id, price:item.price, type:item.type})
        })
        let data = {usuariosId: userData.username, content: media}
        console.log(data)
        const response = axios.post('url',data);
        return response;
    }
    
  
}

export default orderService;
