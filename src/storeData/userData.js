import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: {}
}

export const userDataSlice = createSlice({
   name: 'user',
   initialState,
   reducers:{
        toggleAddData: (state, action)=>{
            console.log(action.payload)
            if(action.payload){
                state.data = action.payload
            }
        }
   }
})

export const {toggleAddData} = userDataSlice.actions
export default userDataSlice.reducer