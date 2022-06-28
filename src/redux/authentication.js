// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// // ** UseJWT import to get config
// import useJwt from '@src/auth/jwt/useJwt'

// const config = useJwt.jwtConfig

// const initialUser = () => {
//   const item = window.localStorage.getItem('userData')
//   //** Parse stored json or if none return initialValue
//   return item ? JSON.parse(item) : {}
// }

export const authSlice = createSlice({
  name: 'authentication',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { name, token } = action.payload
      state.user = name
      state.token = token
    },
    logOut: state => {
      state.user = null
      state.token = null
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token