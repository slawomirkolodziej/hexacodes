import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { startGame, checkAnswer } from '../actions'
import ColorBox from '../components/ColorBox'

const ColorName = styled.div`
  text-align: center;
  font-size: 3rem;
`

class Game extends Component {

  componentDidMount() {
    const { mode, level } = this.props.match.params
    this.props.startGame(mode, level)
  }

  render() {
    const { currentColor, answers, gameOver } = this.props.gameInfo

    if(gameOver) return <div>GAME OVER! SCORE: {this.props.gameInfo.score}</div>

    if(!currentColor) return <div></div>
    
    return (
      <div>
        <ColorName>{currentColor.getCSSHex()}</ColorName>
        {answers.map((color, index) => 
          <ColorBox 
            key={index} 
            color={color}
            currentColor={currentColor}
            onClick={this.props.checkAnswer}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameInfo: state.gameInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: (mode, level) => {
      dispatch(startGame(mode, level))
    },
    checkAnswer: (currentColor, answer, level) => {
      dispatch(checkAnswer(currentColor, answer, level))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)