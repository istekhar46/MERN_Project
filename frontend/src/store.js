import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import blogReducer from './slices/blog/blogslice'
import publicBlogReducer from './slices/blog/publicBlogSlice';

const store   = configureStore({
    reducer : {
        auth : authReducer,
        blog: blogReducer,
        publicBlog: publicBlogReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;