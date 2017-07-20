import React from 'react'
import styled from 'styled-components'

const LivesWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  color: #c0392b;
  font-size: 3rem;
  max-width: 200px;
  margin: 0px auto 0 auto;
  justify-content: space-between;
`

export default (props) => {

  let lives = []
  for(let i = 0; i < 3; i++) {
    lives = i < props.lives ? [...lives, <div key={i}>♥</div>] : [...lives, <div key={i}></div>]
  }

  return (
    <LivesWrapper>
      {lives}
    </LivesWrapper>
  )
}