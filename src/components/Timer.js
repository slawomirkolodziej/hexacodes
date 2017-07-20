import styled, { keyframes } from 'styled-components'

const decreaseWidth = keyframes`
  0% { width: 100%; background: #27ae60; }
  20% { background: #27ae60; }
  80% { background: #c0392b; }
  100% { width: 0%; background: #c0392b; }
`

export default styled.div`
  background: #16a085;
  height: 24px;
  animation: ${props => props.isRunning ? `${decreaseWidth} 10s linear` : 'none'};
`