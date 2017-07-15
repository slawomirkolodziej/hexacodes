import React from 'react'
import styled from 'styled-components'

const GameStatus = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  background: ${props => props.alertColor ? props.alertColor : '#bdc3c7'};
  color: ${props => props.alertColor ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, .85)'};
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 700;
  text-align: center;
`

export default (props) => {

  return (
    <GameStatus alertColor={props.alertColor}>
      Score: {props.score}
    </GameStatus>
  )
}