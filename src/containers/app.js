import React, { Component } from 'react'
import Header from './header'
import MainMenu from '../containers/main_menu'
import Game from '../containers/game'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

const GameWrapper = styled.div`
  margin: 150px auto 0 auto;
  max-width: 800px;
`

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GameWrapper>
          <Switch>
            <Route path="/game/:mode/:level" component={Game} />
            <Route path="/" component={MainMenu}/>
          </Switch>
        </GameWrapper>
      </div>
    )
  }
}
