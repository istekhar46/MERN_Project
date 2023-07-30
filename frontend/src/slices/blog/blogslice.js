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
        filter: (state, action) => {
            state.userBlogs = state.userBlogs.blog.filter((blog) => blog._id !== action.payload.id)
        }
    }
})


export const { setBlogs, reset, filter } = blogSlice.actions;
export default blogSlice.reducer;