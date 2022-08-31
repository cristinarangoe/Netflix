import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const buyItemsSlice = createSlice({
   name: 'items',
   initialState,
   reducers:{
        toggleAddItem: (state, action)=>{
            if(state.items.filter(e => e.id === action.payload.id).length == 0){
            state.items = [...state.items, action.payload]
        } 
        }
   }
})

export const {toggleAddItem} = buyItemsSlice.actions
export default buyItemsSlice.reducer