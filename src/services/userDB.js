import axios from "axios"

const url = "https://cf5ag3fame.execute-api.us-east-1.amazonaws.com/Dev/"
const userDBServices = {

    async getUserPlan(id){
        console.log(id)
        const data = await axios.get(url+"user/", {params:{user:id}})
        return data.data[0];
        
    },
    

    async postUserPlan(index, id){
        console.log(index)
        console.log(id)
        const data = await axios.get(url + "cambiarusuario/", {params:{cuenta:index, id}})
        console.log(data)
        return data.data[0]
    },


    async createUserPlan(user){
        console.log(user)
        const data = await axios.get(url + "createuser/", {params:{user: user.ID,Given_Name:user.Given_Name, Family_Name: user.Family_Name}})
        console.log(data.data)
        return data.data[0]
    }
}

export default userDBServices;