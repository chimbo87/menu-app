import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import  {apiSlice} from './apiSlice';
import cartReducer from  './cartSlice';


export const store = configureStore({
    reducer:{
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart:cartReducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})