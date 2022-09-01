import axios from "axios"

 const url = "https://cf5ag3fame.execute-api.us-east-1.amazonaws.com/Test/user?user="
const userDBServices = {

    async getUserPlan(){
        let breve = "prueba@aws.com"
        const data = await axios.get(url, breve)
        console.log(data.data)
    },

    async postUserPlan(){

    },


    updateUserPlan(){

    }
}

export default userDBServices;