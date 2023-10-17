

import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 }

const counterSlice = createSlice({name: "count",
initialState,
reducers: {
    increase: (state,action)=>{
        return state =  {...state, counter: state.counter + parseInt(action.payload)}; 
    },
    decrease: (state,action) => {
        return state =  {...state, counter: state.counter - parseInt(action.payload)}; 
    }
}
})

export const {increase, decrease} = counterSlice.actions;
export default counterSlice.reducer;