import { 
  RESET_GAME_INFO, 
  ADD_POINT, 
  SUBSTRACT_POINT, 
  GENERATE_NEW_COLORS,
  END_GAME
} from '../actions'

export default (state = {}, {type, payload}) => {
  switch(type) {
    case RESET_GAME_INFO:
      return {
        mode: payload.mode,
        level: payload.level,
        currentColor: payload.currentColor,
        answers: payload.answers,
        score: 0,
        lives: 3
      }
    case END_GAME:
      return { ...state, gameOver: true }
    case GENERATE_NEW_COLORS:
      return {
        ...state,
        currentColor: payload.newCurrentColor,
        answers: payload.answers
      }
    case ADD_POINT:
      return { ...state, score: state.score + 1,  statusColor: '#27ae60' }
    case SUBSTRACT_POINT:
      return { ...state, score: state.score - 1, lives: state.lives - 1, statusColor: '#c0392b' }
    default:
      return { ...state }
  }
  
}