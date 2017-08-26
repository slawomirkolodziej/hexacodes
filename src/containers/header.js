import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Score from '../components/Score'
import Timer from '../components/Timer'
import Lives from '../components/Lives'

const GameInfo = styled.div`
  display: flex;
`

const Header = (props) => {
  const { gameOver, score, lives } = props.gameInfo
  const { isRunning, componentKey } = props.timer

  if(gameOver) return <div></div>

  return (
    <div>
        <Timer isRunning={isRunning} key={componentKey} />
        <GameInfo>
          <Score score={score} />
          <Lives lives={lives} />
        </GameInfo>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    gameInfo: state.gameInfo,
    timer: state.timer
  }
}

export default connect(mapStateToProps)(Header)