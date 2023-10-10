import {configureStore}  from '@reduxjs/toolkit';
import cartReducer from './Features/Cart/Cartslice';
import modalReducer from './Features/Modal/ModalSlice';

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
    }
})