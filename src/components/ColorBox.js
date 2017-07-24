import React from 'react'
import styled from 'styled-components'

const ColorBox = styled.div`
  display: inline-block;
  padding-top: calc(100% / 3);
  width: 100%;
  background-color: ${props => props.color};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export default props => {
  const onClick = (currentcolor, color, level) => {
    props.onClick(props.currentColor, props.color, props.level)
  }
  return (
    <ColorBox 
      color={props.color.getCSSHsl()} 
      onClick={onClick}
    />
  )
  
}