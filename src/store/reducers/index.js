import { combineReducers } from 'redux'
import userReducer from './userReducer'
import signInReducer from './signInReducer'

export default combineReducers({
  users: userReducer,
  signIn: signInReducer
})