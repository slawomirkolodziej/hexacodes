import React from 'react'
import { Switch, Route } from 'react-router-dom'
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

export default (props) => {

  return (
    <div>
      <Title>Hexacodes</Title>
      <Switch>
        <Route path="/choose-level" component={renderLevel} />
        <Route path="/" component={renderMenuElements} />
      </Switch>
    </div>
  )
}