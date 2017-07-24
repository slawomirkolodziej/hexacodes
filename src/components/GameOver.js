import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Button from '../components/Button'

const StyledScore = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
`

const StyledGameOver = styled.div`
  @media (max-width: 600px) {
    padding-bottom: 30px;
  }
`

export default ({ score }) => {
  return (
    <StyledGameOver>
      <Title>GAME OVER!</Title>
      <StyledScore>Score: {score}</StyledScore>
      <Button link="/choose-level" title="Play again" />
    </StyledGameOver>
  )
}