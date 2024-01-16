import { configureStore } from "@reduxjs/toolkit";
import { randomReducer } from "./randomSlice";
import { maxCaloriesReducer } from "./maxCaloriesSlice";
import { timePreparationReducer } from "./timePreparationSlice";
import { veganReducer } from "./veganSlice";
import { queryReducer } from "./querySlice";
import { offsetReducer } from "./offsetSlice";

export const store = configureStore({
    reducer: {
        random: randomReducer,
        calories: maxCaloriesReducer,
        time: timePreparationReducer,
        vegan: veganReducer,
        query: queryReducer,
        offset: offsetReducer,
    }
})