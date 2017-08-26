import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Button from '../components/Button'

const Score = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
`

const GameOver = styled.div`
  @media (max-width: 600px) {
    padding-bottom: 30px;
  }
`

export default ({ score }) => (
  <GameOver>
    <Title>GAME OVER!</Title>
    <Score>Score: {score}</Score>
    <Button link="/choose-level" title="Play again" />
  </GameOver>
)