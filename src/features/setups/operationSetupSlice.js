import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    items: [],
    status: 'idle',
    error: null

}

export const fetchList = createAsyncThunk('operationsetup/fetchItems', async (axios) => {

    const response = await axios.get("/operation/setup")
    return response.data.data
})

export const addItem = createAsyncThunk('operationsetup/addItem', async (opt) => {

    try {
        const response = await opt.axios.post("/operation/setup", opt.data)
        console.log({ response })
        return response.data.data
    } catch (error) {

        console.log({ error })
    }


})

export const removeItem = createAsyncThunk('operationsetup/removeItem', async (opt, state) => {
    console.log({ state })

    try {
        const response = await opt.axios.delete(`/operation/setup/${opt.id}`)
        console.log({ response })
        return response.data.data
    } catch (error) {

        console.log({ error })
    }


})

const operationSetupSlice = createSlice({
    name: "operationsetup",
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

export const selectAllItems = (state) => state.operationsetup.items
export const selectAllStatus = (state) => state.operationsetup.status
export const { itemsList, itemAdded } = operationSetupSlice.actions

export default operationSetupSlice.reducer