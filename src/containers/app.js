import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import MainMenu from '../containers/MainMenu'
import Game from '../containers/Game'
import { Switch, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'


const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  background: ${props => props.statusColor ? props.statusColor : '#1abc9c'};
  transition: 0.1s ease-in-out;
`

const GameWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  height: 500px;
  background: #ecf0f1;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const App = (props) => {
  return (
    <StyledApp statusColor={props.gameInfo.statusColor}>
      <GameWrapper>
        <Route path="/game/:level" component={Header} />
        <Switch>
          <Route path="/game/:level" component={Game} />
          <Route path="/" component={MainMenu}/>
        </Switch>
      </GameWrapper>
    </StyledApp>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { gameInfo: state.gameInfo }
}

export default withRouter(connect(mapStateToProps)(App))