import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { startGame, checkAnswer } from '../actions'
import ColorBox from '../components/ColorBox'

const ColorName = styled.div`
  text-align: center;
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.85);
  text-transform: uppercase;
  font-weight: 600;
`

const Answers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

class Game extends Component {

  componentDidMount() {
    this.props.startGame(this.props.match.params.level)
  }

  render() {
    const { currentColor, answers, gameOver } = this.props.gameInfo

    if(gameOver) return <div>GAME OVER! SCORE: {this.props.gameInfo.score}</div>

    if(!currentColor) return <div></div>
    
    return (
      <div>
        <ColorName>{currentColor.getCSSHex()}</ColorName>
        <Answers>
          {answers.map((color, index) => 
            <ColorBox 
              key={index} 
              color={color}
              currentColor={currentColor}
              onClick={this.props.checkAnswer}
            />
          )}
        </Answers>
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
    startGame: (level) => {
      dispatch(startGame(level))
    },
    checkAnswer: (currentColor, answer, level) => {
      dispatch(checkAnswer(currentColor, answer, level))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)