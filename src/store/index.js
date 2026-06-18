import { configureStore } from "@reduxjs/toolkit";
import uiSclice from "./ui-slice.js";

const store = configureStore({
    reducer: {
        ui: uiSclice,
    }
})

export default store;