import { combineReducers } from 'redux'
import user, * as fromAuth from './user.js'

export default combineReducers({
  user: user,
})