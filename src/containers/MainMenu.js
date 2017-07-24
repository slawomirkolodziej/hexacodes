import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';
import Button from '../components/Button'
import Title from '../components/Title'


const renderMenuElements = () => {
  return (
    <div>
      <Button
        title="Play" 
        link="/choose-level"
      />
    </div>
  )
}

const renderLevel = (props) => {
  return (
    <div>
      <Button
        title="Easy"
        link="/game/easy"
      />
      <Button
        title="Hard"
        link="/game/hard"
      />
    </div>
  )
}

const StyledMainMenu = styled.div`
  @media (max-width: 600px) {
    padding-bottom: 30px;
  }
`

export default (props) => {

  return (
    <StyledMainMenu>
      <Title>Hexacodes</Title>
      <Switch>
        <Route path="/choose-level" component={renderLevel} />
        <Route path="/" component={renderMenuElements} />
      </Switch>
    </StyledMainMenu>
  )
}