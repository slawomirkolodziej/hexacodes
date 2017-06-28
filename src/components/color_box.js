import React from 'react'
import styled from 'styled-components'

const ColorBox = styled.div`
  display: inline-block;
  height: 100px;
  width: 100px;
  border: 1px solid black;
  background-color: ${props => props.color}
`

export default props => {
  const onClick = (currentcolor, color) => {
    props.onClick(props.currentColor, props.color, props.level)
  }
  return (
    <ColorBox 
      color={props.color.getCSSHsl()} 
      onClick={onClick}
    />
  )
  
}