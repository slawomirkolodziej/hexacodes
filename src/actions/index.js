import Color from '../utils/color'
import { shuffle } from 'lodash'

export const RESET_GAME_INFO = 'reset_game_info'
export const ADD_POINT = 'add_point'
export const SUBSTRACT_POINT = 'substract_point'
export const GENERATE_NEW_COLORS = 'generate_new_colors'
export const START_TIMER = 'start_timer'
export const STOP_TIMER = 'stop_timer'
export const END_GAME = 'end_game'
export const UPDATE_END_GAME_TIMEOUT = 'update_end_game_timeout'

export const resetGameInfo = (level) => {
  const currentColor = new Color()
   
  return {
    type: RESET_GAME_INFO,
    payload: {
      level,
      currentColor,
      answers: shuffle([
        currentColor,
        ...currentColor.getSimilarColors(level)
      ])
    }
  }
}

const endGame = () => {
  return dispatch => {
    dispatch({ type: END_GAME })
    dispatch({ type: STOP_TIMER })
  }
}

export const addPoint = () => {
  return { type: ADD_POINT }
}

export const substractPoint = () => {
  return { type: SUBSTRACT_POINT }
}

const resetTimer = () => {
  return (dispatch, getState) => { 
    const prevTimeout = getState().timer.endGameTimeout
    if(prevTimeout) clearTimeout(prevTimeout)

    if(getState().gameInfo.lives === 0 ) {
      dispatch(endGame())
    } else {
      const timeout = setTimeout(() => {
        dispatch(substractPoint())
        dispatch(resetTimer())
      }, 10 * 1000)

      dispatch({ type: START_TIMER })
      dispatch({ 
        type: UPDATE_END_GAME_TIMEOUT,
        payload: {
          endGameTimeout: timeout
        }
      })
    }
   } 
}

export const startGame = (level) => {
  return dispatch => {
    //dispatch(resetTimer())
    dispatch(resetGameInfo(level))
  }
}

export const generateNewColors = (currentColor, level) => {
  const newCurrentColor = new Color(null, currentColor)
  return {
    type: GENERATE_NEW_COLORS,
    payload: {
      newCurrentColor,
      answers: shuffle([
        newCurrentColor,
        ...newCurrentColor.getSimilarColors(level)
      ])
    } 
  }
}

export const checkAnswer = (currentColor, answer, level) => {
  return (dispatch, getState) => {
    if(currentColor.getCSSHex() === answer.getCSSHex()) {
      dispatch(addPoint())
    } else {
      dispatch(substractPoint())
    }
    
    dispatch(resetTimer())
    dispatch(generateNewColors(currentColor, level))
  }
}

