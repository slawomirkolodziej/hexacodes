import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { startGame, checkAnswer } from '../actions'
import ColorBox from '../components/ColorBox'
import GameOver from '../components/GameOver'

const ColorName = styled.div`
  text-align: center;
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.85);
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 20px;

  & span {
    font-size: 2rem;
  }
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
    const { currentColor, answers, gameOver, score } = this.props.gameInfo

    if(gameOver) return <GameOver score={score} />

    if(!currentColor) return <div></div>

    const colorNameValue = () => {
      const [r, g, b] = currentColor.getHex()
      return <ColorName><span>#</span>{r}{g}{b}</ColorName>
    }
    
    return (
      <div>
        {colorNameValue()}
        <Answers>
          {answers.map((color, index) => 
            <ColorBox 
              key={index} 
              color={color}
              currentColor={currentColor}
              level={this.props.gameInfo.level}
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