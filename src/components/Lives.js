import React from 'react'
import styled from 'styled-components'

const LivesWrapper = styled.div`
  text-align: center;
`

export default (props) => {

  let lives = []
  for(let i = 0; i < props.lives; i++) lives = [...lives, <div key={i}>♥</div>]

  return (
    <LivesWrapper>
      {lives}
    </LivesWrapper>
  )
}