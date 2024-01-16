import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const offsetSlice = createSlice({
    name: "offset",
    initialState,
    reducers: {
        incrementOffset: (state) =>{
            state.value += 12
        },
        decrementOffset: (state) =>{
            state.value -= 12
        },
        resetOffset: (state) => {
            state.value = 0
        }
    }
})

export const { incrementOffset, decrementOffset, resetOffset } = offsetSlice.actions
export const offsetReducer = offsetSlice.reducer