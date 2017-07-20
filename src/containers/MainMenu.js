import React from 'react'
import styled from 'styled-components'
import MenuItem from '../components/MenuItem'
import { Switch, Route } from 'react-router-dom'

const GameTitle = styled.h1`
  text-align: center;
`

const renderMenuElements = () => {
  return (
    <div>
      <MenuItem
        title="Play" 
        link="/choose-level"
      />
    </div>
  )
}

const renderLevel = (props) => {
  return (
    <div>
      <MenuItem
        key="easy"
        title="Easy"
        link="/game/easy"
      />
      <MenuItem
        key="medium"
        title="Medium"
        link="/game/medium"
      />
      <MenuItem
        key="hard"
        title="Hard"
        link="/game/hard"
      />
    </div>
  )
}

export default (props) => {

  return (
    <div>
      <GameTitle>Hexacodes</GameTitle>
      <Switch>
        <Route path="/choose-level" component={renderLevel} />
        <Route path="/" component={renderMenuElements} />
      </Switch>
    </div>
  )
}