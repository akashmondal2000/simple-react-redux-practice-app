import { createSlice } from '@reduxjs/toolkit';


const initialStateUi = { cartIsVisible: false };

const uiSclice = createSlice({
    name:"ui",
    initialState: initialStateUi ,
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
    }
});

export const uiActions = uiSclice.actions;

export default uiSclice;