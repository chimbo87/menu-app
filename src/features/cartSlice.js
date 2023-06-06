import { createSlice} from "@reduxjs/toolkit";

const initialState= {
    cartItems:[],
    amount:5,
    total:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{}
})
// console.log(cartSlice)
export default cartSlice.reducer;