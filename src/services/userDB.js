import axios from "axios"

 const url = "https://cf5ag3fame.execute-api.us-east-1.amazonaws.com/Dev/user/"
const userDBServices = {

    async getUserPlan(){
        console.log("breve")
        let user = {user: "prueba"}
        const data = await axios.get(url, {params:{user:"prueba"}})
        console.log(data.data)
        
    }

    // async postUserPlan(){

    // },


    // updateUserPlan(){

    // }
}

export default userDBServices;