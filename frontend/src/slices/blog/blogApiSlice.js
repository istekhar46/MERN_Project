import { apiSlice } from "../apiSlice";

const BLOGS_URL = '/api/blogs';


const blogsApiSlice = apiSlice.injectEndpoints({
    endpoints: (buider)=>({
        createBlog: buider.mutation({
            query: (data)=>({
                url:`${BLOGS_URL}/userblogs`,
                method: 'POST',
                body: data,
            })
        }),
        getBlog: buider.mutation({
            query: ()=>({
                url:`${BLOGS_URL}/userblogs`,
                method: 'GET',
            })
        }),
    })
})


export const {useCreateBlogMutation, useGetBlogMutation} = blogsApiSlice ;