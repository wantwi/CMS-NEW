import { apiSlice } from "../../api/apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/admin/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        getNewToken: builder.mutation({
            query: () => ({
                url: '/admin/refresh',
                method: 'Get'

            })
        })
    })
})

export const {
    useLoginMutation,
    useGetNewTokenMutation
} = authApiSlice