import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../src/features/dataSlice";

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
});