import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vegan: false
}

export const veganSlice = createSlice({
    name: "vegan",
    initialState,
    reducers: {
        checkVegan: (state) =>{
            state.vegan = true
        },
        deCheckVegan: (state) =>{
            state.vegan = false
        }
    }
})

export const { checkVegan, deCheckVegan } = veganSlice.actions
export const veganReducer = veganSlice.reducer