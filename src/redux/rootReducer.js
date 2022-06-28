// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './features/auth/authSlice'

const rootReducer = {
  auth,
  navbar,
  layout
}

export default rootReducer
