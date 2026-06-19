import { configureStore } from "@reduxjs/toolkit";
import uiSclice from "./ui-slice.js";
import cartSlice from "./cart-slice.js";

const store = configureStore({
    reducer: {
        ui: uiSclice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;