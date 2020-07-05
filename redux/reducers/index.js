import { combineReducers } from 'redux'
import user, * as fromUser from './user.js'

export default combineReducers({
  user: user,
})

export const isLogin = state => fromUser.isLogin(state.user)

export const getUser = state => fromUser.getUser(state.user)