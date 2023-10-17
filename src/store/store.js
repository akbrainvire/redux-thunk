
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import countReducer from '../reducers/counterSlice';
import { productReducer } from '../reducers/fetchProductSlice';

const reducer = combineReducers({
    countReducer,
    productReducer,
})

const store = configureStore({
    reducer,
})

export default store;