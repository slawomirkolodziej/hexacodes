import React from 'react'
import styled from 'styled-components'

const heartSVG = <svg viewBox="0 0 52 52">
<path d="M52 16.2C51 8 45 1.8 37.7 1.8c-5 0-9.4 2.7-12 7-2.5-4.4-6.8-7-11.6-7-7.3 0-13.3 6-14 14.4 0 .4-.3 2.4.4 5.5 1 4.6 3.6 8.7 7.2 12l18 16.5 18.6-16.5c3.6-3.3 6-7.4 7.2-12 .7-3 .5-5 .4-5.5z"/>
</svg>

const LivesWrapper = styled.div`
  text-align: center;
  display: flex;
  width: 50%;
  padding: 10px;
  text-align: center;
  justify-content: center;
`

const StyledHeart = styled.div`
  width: 17px;
  height: 17px;

  & + & {
    margin-left: 20px;
  }

  svg {
    fill: #c0392b;
  }
`

export default (props) => {
  let hearts = new Array(props.lives).fill(null).map((element, index) => (
    <StyledHeart key={index}>{heartSVG}</StyledHeart>
  ))

  return (
    <LivesWrapper>
      {hearts}
    </LivesWrapper>
  )
}