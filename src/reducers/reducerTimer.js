import { 
  START_TIMER,
  STOP_TIMER,
  UPDATE_END_GAME_TIMEOUT
} from '../actions'

export default (state = {}, {type, payload}) => {
  switch(type) {
    case START_TIMER:
      return { ...state, isRunning: true }
    case STOP_TIMER:
      return { ...state, isRunning: false }
    case UPDATE_END_GAME_TIMEOUT:
      return { ...state, endGameTimeout: payload.endGameTimeout }
    default: 
      return state
  }
}