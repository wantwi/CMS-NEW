import { apiSlice } from "../../api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/getall',
            keepUnusedDataFor: 5
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice 