import { combineReducers } from 'redux'
import message from './message'

const createRootReducer = () => combineReducers({
  message
})

export default createRootReducer