import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: ""
}

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers:{
        changeQuery: (state, action) =>{
            state.query = action.payload
        }
    }
})

export const { changeQuery } = querySlice.actions
export const queryReducer = querySlice.reducer
