import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxTime: 10000
}

export const timePreparationSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        changeMaxTime : (state, action) =>{
            state.maxTime = action.payload
        }
    }
})

export const { changeMaxTime } = timePreparationSlice.actions
export const timePreparationReducer = timePreparationSlice.reducer