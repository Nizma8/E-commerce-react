import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },removeFromCart:(state,action)=>{
          return  state.filter(items=>items.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state =[]
        }
    }
})

export const { addToCart ,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer