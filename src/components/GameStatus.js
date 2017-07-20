import React from 'react'
import styled from 'styled-components'

const GameStatus = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  color: rgba(0, 0, 0, .85);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
`

export default (props) => {

  return (
    <GameStatus>
      Score: {props.score}
    </GameStatus>
  )
}