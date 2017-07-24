import React from 'react'
import styled from 'styled-components'

const StyledScore = styled.div`
  height: 100%;
  width: 50%;
  padding: 10px;
  color: rgba(0, 0, 0, .85);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
`

export default (props) => {

  return (
    <StyledScore>
      Score: {props.score}
    </StyledScore>
  )
}