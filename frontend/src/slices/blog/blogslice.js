import { createSlice } from "@reduxjs/toolkit";



const initialState = ({
    userBlogs: [],
})


const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.userBlogs = action.payload
        },
        reset: (state, action) => {
            state.userBlogs = initialState
        },
    }
})


export const { setBlogs, reset } = blogSlice.actions;
export default blogSlice.reducer;