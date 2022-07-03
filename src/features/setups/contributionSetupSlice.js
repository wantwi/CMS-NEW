import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    status: 'idle',
    error: null
}

export const fetchList = createAsyncThunk('contributionsetup/fetchItems', async (axios) => {

    const response = await axios.get("/contribution/setup")
    return response.data.data
})

export const addItem = createAsyncThunk('contributionsetup/addItem', async (opt) => {
    try {
        const response = await opt.axios.post("/contribution/setup", opt.data)
        console.log({ response })
        return response.data.data
    } catch (error) {

        console.log({ error })
    }

})
export const removeItem = createAsyncThunk('operationsetup/removeItem', async (opt, state) => {
    console.log({ state })

    try {
        const response = await opt.axios.delete(`/contribution/setup/${opt.id}`)
        console.log({ response })
        return response.data.data
    } catch (error) {

        console.log({ error })
    }

})

const contributionSetupSlice = createSlice({
    name: "contributionsetup",
    initialState,
    reducers: {
        itemsList: {
            reducer(state, action) {
                console.log({ action })
                state.items.concat(action.payload)
            }
        },
        itemAdded: {
            reducer(state, action) {
                state.items.push(action.payload)
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchList.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(addItem.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log({ action })
                state.items.push(action.payload)

            })
            .addCase(removeItem.fulfilled, (state, action) => {
                if (!action.payload?._id) {
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return
                }
                const { _id } = action.payload
                const items = state.items.filter(item => item._id !== _id)
                state.items = items
            })


    }
})

export const selectAllItems = (state) => state.contributionsetup.items
export const selectAllStatus = (state) => state.contributionsetup.status
export const { itemsList, itemAdded } = contributionSetupSlice.actions

export default contributionSetupSlice.reducer