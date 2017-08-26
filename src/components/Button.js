import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuItem = styled(Link)`
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  max-width: 200px;
  margin: 0 auto 15px auto;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export default ({ title, link }) => (
  <MenuItem to={link}>
    {title}
  </MenuItem>
)