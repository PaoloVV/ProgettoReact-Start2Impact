import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const myKey = import.meta.env.VITE_API_KEY
const myKey = import.meta.env.VITE_ALTERNATIVE_API_KEY

const initialState = {
    loading: false,
    randomRecipes: [],
    error: ""
}

export const fetchRandom = createAsyncThunk("random/fetchRandom", async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${myKey}&number=6&tags=vegetarian`)
    console.log(response.data.recipes)
    return response.data.recipes
})

export const randomSlice = createSlice({
    name: "random",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRandom.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchRandom.fulfilled, (state, action) => {
            state.loading = false
            state.randomRecipes = action.payload
        }),
        builder.addCase(fetchRandom.rejected, (state, action) => {
            state.loading = false
            state.randomRecipes = []
            state.error = action.error.message
        })
    }

})

export const randomReducer = randomSlice.reducer