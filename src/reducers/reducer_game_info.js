import { START_GAME, ADD_POINT, SUBSTRACT_POINT, GENERATE_NEW_COLORS } from '../actions'

export default (state = {}, {type, payload}) => {
  switch(type) {
    case START_GAME:
      return {
        mode: payload.mode,
        level: payload.level,
        currentColor: payload.currentColor,
        answers: payload.answers,
        score: 0
      }
    case GENERATE_NEW_COLORS:
      return {
        ...state,
        currentColor: payload.newCurrentColor,
        answers: payload.answers
      }
    case ADD_POINT:
      return { ...state, score: state.score + 1
      }
    case SUBSTRACT_POINT:
      return { ...state, score: state.score - 1
      }
    default:
      return { ...state }
  }
  
}