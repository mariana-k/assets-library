import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getItems: builder.query<any, void>({
            query: () => 'posts',
        }),
        getItemById: builder.query<any, string>({
            query: (id) => `posts/${id}`,
        }),
    }),
})

export const { useGetItemsQuery, useGetItemByIdQuery } = api
