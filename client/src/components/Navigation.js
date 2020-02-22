import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        <i className="fas fa-home"></i>
      </LinkStyled>
      <LinkStyled to="/members">
        <i className="fas fa-users"></i>
      </LinkStyled>
      <LinkStyled to="/profile">
        <i className="fas fa-user"></i>
      </LinkStyled>
      <LinkStyled to="/settings">
        <i className="fas fa-user-cog"></i>
      </LinkStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
  flex-grow: 1;
  grid-area: footer;
  color: $color-white;
  justify-content: center;
  align-items: center;
  margin: 0;
  max-width: 100%;
`

const LinkStyled = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  text-decoration: none;
  justify-content: center;
  justify-self: stretch;
  align-items: center;
  color: white;
  font-size: 2.4rem;
  background-color: transparent;
  margin: 0;
  padding: 0;
  &.active {
    color: #8681b4;
  }
  &:hover {
    color: #8e8baa;
    background: #135285;
  }
`
