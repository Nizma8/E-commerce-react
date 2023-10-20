import { configureStore } from '@reduxjs/toolkit';
import wishlistSlice from "./wishListSlice";
import cartslice from './cartslice';


const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartslice

    }
})

export default store;