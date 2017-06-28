import React from 'react'
import { connect } from 'react-redux' 
import styled from 'styled-components'

const Navigation = styled.div`
  padding: 0 15px;
  background: silver;
`

const Header = (props) => {
  return (
    <div>
      <Navigation>
        score: {props.gameInfo.score}
      </Navigation>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    gameInfo: state.gameInfo
  }
}

export default connect(mapStateToProps)(Header)