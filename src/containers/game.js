import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { startGame, checkAnswer } from '../actions'
import ColorBox from '../components/color_box'

const ColorName = styled.div`
  text-align: center;
  font-size: 3rem;
  color: ${props => props.color}
`

class Game extends Component {

  componentDidMount() {
    const { mode, level } = this.props.match.params
    this.props.startGame(mode, level)
  }

  render() {
    if(!this.props.gameInfo.currentColor) return <div></div>

    const { currentColor, answers } = this.props.gameInfo
    return (
      <div>
        <ColorName color={currentColor.getCSSHex()}>{currentColor.getCSSHex()}</ColorName>
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