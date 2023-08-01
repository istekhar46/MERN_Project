import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    publicBlogs: [],
}

const publicSlice = createSlice({
  name: 'PublicBlogs',
  initialState,
  reducers:{
    setPublicBlogs: (state, action)=> {
        state.publicBlogs = action.payload
    },
    resetPublicBlog:(state,action)=> {
        state.publicBlogs = initialState
    }
  }
})

export const {setPublicBlogs, resetPublicBlog} = publicSlice.actions;
export default publicSlice.reducer;