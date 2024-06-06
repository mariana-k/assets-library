import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URLS } from '@/services/api.constants'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: URLS.assets,
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
