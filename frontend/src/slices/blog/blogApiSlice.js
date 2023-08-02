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
        deleteBlog: buider.mutation({
            query: (id)=>({
                url:`${BLOGS_URL}/userblogs/${id}`,
                method: 'DELETE',
            })
        }),
        getPublicBlog: buider.mutation({
            query: ()=>({
                url: BLOGS_URL,
                method: 'GET',
            })
        }),
    })
})


export const {useCreateBlogMutation, useGetBlogMutation, useDeleteBlogMutation, useGetPublicBlogMutation} = blogsApiSlice ;