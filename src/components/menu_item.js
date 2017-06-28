import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuItem = styled(Link)`
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid black;
`

export default ({ title, link }) => {
  return (
    <MenuItem to={link}>
      {title}
    </MenuItem>
  )
}