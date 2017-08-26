import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';
import Button from '../components/Button'
import Title from '../components/Title'


const PlayButton = () => (
  <Button title="Play" link="/choose-level" />
)

const Levels = (props) => (
  <div>
    <Button title="Easy" link="/game/easy" />
    <Button title="Hard" link="/game/hard" />
  </div>
)

const MainMenu = styled.div`
  @media (max-width: 600px) {
    padding-bottom: 30px;
  }
`

export default (props) => (
  <MainMenu>
    <Title>Hexacodes</Title>
    <Switch>
      <Route path="/choose-level" component={Levels} />
      <Route path="/" component={PlayButton} />
    </Switch>
  </MainMenu>
)