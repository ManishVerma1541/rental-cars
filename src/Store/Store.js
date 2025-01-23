import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./StoreSlice/getCarSlice";



const Mystore = configureStore({
    reducer:{
        
        car :  carReducer
    }
})

export default Mystore;