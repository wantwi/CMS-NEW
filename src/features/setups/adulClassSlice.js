import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    adultClasses: [],
    status: 'idle',
    error: null

}

export const fetchClassList = createAsyncThunk('adultclass/fetchClassList', async (axios) => {

    const response = await axios.get("/adult/class")
    return response.data.data
})

export const addClass = createAsyncThunk('adultclass/addClass', async (opt) => {

    try {
        const response = await opt.axios.post("/adult/class", opt.data)
        console.log({ response })
        return response.data.data
    } catch (error) {

        console.log({ error })
    }


})

export const removeItem = createAsyncThunk('adultclass/removeItem', async (opt, state) => {
    console.log({ state })

    try {
        const response = await opt.axios.delete(`/adult/class/${opt.id}`)
        console.log({ response })
        return response.data.data
    } catch (error) {

        console.log({ error })
    }


})


const adultClassSlice = createSlice({
    name: "adultclass",
    initialState,
    reducers: {
        adultClassList: {
            reducer(state, action) {
                console.log({ action })
                state.adultClasses.concat(action.payload)
            }
        },
        classAdded: {
            reducer(state, action) {
                state.adultClasses.push(action.payload)
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchClassList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchClassList.fulfilled, (state, action) => {
                state.status = 'succeeded'

                state.adultClasses = action.payload.sort((a, b) => b.name - a.name)
            })
            .addCase(addClass.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addClass.fulfilled, (state, action) => {
                state.status = 'succeeded'

                console.log({ action })
                state.adultClasses.unshift(action.payload)

            })
            .addCase(removeItem.fulfilled, (state, action) => {
                if (!action.payload?._id) {
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return
                }
                const { _id } = action.payload
                const items = state.adultClasses.filter(item => item._id !== _id)
                state.adultClasses = items
            })


    }
})

export const selectAllClass = (state) => state.adultclass.adultClasses
export const selectAllStatus = (state) => state.adultclass.status
export const { adultClassList, classAdded } = adultClassSlice.actions

export default adultClassSlice.reducer
