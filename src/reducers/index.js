import { combineReducers } from 'redux'
import gameInfo from './reducerGameInfo'
import timer from './reducerTimer'

export default combineReducers({
  gameInfo,
  timer
})