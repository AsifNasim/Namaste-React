import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore = configureStore({
    // this whole big reducer is an app reducer which contains small slice reducers 
    reducer : {
        cart : cartReducer
    }
});

export default appStore;