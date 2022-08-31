import { configureStore } from "@reduxjs/toolkit";
import { buyItemsSlice } from "./storeData/buyItems";
import { userDataSlice } from "./storeData/userData";

export const store = configureStore({
    reducer:{
        buyItems:buyItemsSlice.reducer,
        userData: userDataSlice.reducer,
    }
})