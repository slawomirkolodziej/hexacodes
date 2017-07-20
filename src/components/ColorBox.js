import React from 'react'
import styled from 'styled-components'

const ColorBox = styled.div`
  display: inline-block;
  height: 100px;
  width: 100px;
  background-color: ${props => props.color};
  border-radius: 3px
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