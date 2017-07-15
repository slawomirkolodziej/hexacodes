import React from 'react'
import { connect } from 'react-redux'
import GameStatus from '../components/GameStatus'
import Timer from '../components/Timer'
import Lives from '../components/Lives'

const Header = (props) => {
  return (
    <div>
        <GameStatus alertColor={props.gameInfo.statusColor} score={props.gameInfo.score} />
        {/* force timer to rerender when score changes */}
        <Timer isRunning={props.timer.isRunning} key={props.gameInfo.score} />
        <Lives lives={props.gameInfo.lives} />
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