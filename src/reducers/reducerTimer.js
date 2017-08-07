import { 
  START_TIMER,
  STOP_TIMER,
  UPDATE_TIMEOUT
} from '../actions'

export default (state = {}, {type, payload}) => {
  switch(type) {
    case START_TIMER:
      return { ...state, isRunning: true }
    case STOP_TIMER:
      return { ...state, isRunning: false }
    case UPDATE_TIMEOUT:
      /* force rerendering timer component by assigning random key */
      return { ...state, endGameTimeout: payload.endGameTimeout, componentKey: Math.random() }
    default: 
      return state
  }
}