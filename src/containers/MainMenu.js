import React from 'react'
import styled from 'styled-components'
import MenuItem from '../components/MenuItem'
import { map } from 'lodash'
import { Switch, Route } from 'react-router-dom'

const GameTitle = styled.h1`
  text-align: center;
`

const menuElements = {
  1: {
    title: 'Classic Mode',
    link: '/classic-mode/choose-level'
  },
  2: {
    title: 'Reverse Mode',
    link: '/reverse-mode/choose-level'
  }
}

const levels = {
  easy: {
    title: 'Easy'
  },
  medium: {
    title: 'Medium'
  },
  hard: {
    title: 'Hard'
  }
}

const renderMenuElements = () => {
  return (
    <div>
      {map(menuElements, (element, id) => {
        return (
          <MenuItem 
            key={id} 
            title={element.title} 
            link={element.link} 
          />
        )
      })}
    </div>
  )
}

const renderLevel = (props) => {
  return (
    <div>
      {map(levels, (level, id) => {
        return (
          <MenuItem
            key={id}
            title={level.title}
            link={`/game/${props.match.params.mode}/${id}`}
          />
        )
      })}
    </div>
  )
}

export default () => {
    return (
      <div>
        <GameTitle>Hexacodes</GameTitle>
        <Switch>
          <Route path="/:mode/choose-level" component={renderLevel} />
          <Route path="/" component={renderMenuElements} />
        </Switch>
      </div>
    )
}