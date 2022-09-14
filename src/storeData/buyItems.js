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
        },
        emptyItems: (state) =>{
            state.items = []
        }
   }
})

export const {toggleAddItem, emptyItems}  = buyItemsSlice.actions
export default buyItemsSlice.reducer