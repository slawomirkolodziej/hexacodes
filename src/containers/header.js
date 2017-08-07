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
  if(props.gameInfo.gameOver) return <div></div>

  return (
    <div>
        <Timer isRunning={props.timer.isRunning} key={props.timer.componentKey} />
        <GameInfo>
          <Score score={props.gameInfo.score} />
          <Lives lives={props.gameInfo.lives} />
        </GameInfo>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    gameInfo: state.gameInfo,
    timer: state.timer
  }
}

export default connect(mapStateToProps)(Header)