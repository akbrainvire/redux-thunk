import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState  = {
    product: [],
    loading: true
};

export const fetchAllProduct = createAsyncThunk('fetch/fetchProduct',
async()=>{
    const res = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())  
    return res;
})

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllProduct.pending]: (state) => {
          state.loading = true
        },
        [fetchAllProduct.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.product = payload
        },
        [fetchAllProduct.rejected]: (state) => {
          state.loading = false
        },
}
})

export const productReducer = productSlice.reducer;