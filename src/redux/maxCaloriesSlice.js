import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxCalories: 3000
}

export const maxCaloriesSlice = createSlice({
    name: "calories",
    initialState,
    reducers: {
        changeCalories: (state, action) => {
            state.maxCalories = action.payload
        }
    }
})

export const maxCaloriesReducer = maxCaloriesSlice.reducer
export const {changeCalories} = maxCaloriesSlice.actions