import Color from '../utils/color'
import { shuffle } from 'lodash'

export const START_GAME = 'start_game'
export const ADD_POINT = 'add_point'
export const SUBSTRACT_POINT = 'substract_point'
export const GENERATE_NEW_COLORS = 'generate_new_colors'

export const startGame = (mode, level) => {
  const currentColor = new Color()
  return {
    type: START_GAME,
    payload: {
      mode,
      level,
      currentColor,
      answers: shuffle([
        currentColor,
        ...currentColor.getSimilarColors(level)
      ])
    }
  }
}

export const addPoint = () => {
  return {
    type: ADD_POINT
  }
}

export const substractPoint = () => {
  return {
    type: SUBSTRACT_POINT
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
  return dispatch => {
    if(currentColor.getCSSHex() === answer.getCSSHex()) {
      dispatch(addPoint())
    } else {
      dispatch(substractPoint())
    }

    dispatch(generateNewColors(currentColor, level))
  }
}

