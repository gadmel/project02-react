import React from 'react'
import styled from 'styled-components/macro'

export default function Navigation({ pagesToNavigateTo }) {
  return (
    <NavigationStyled>
      {pagesToNavigateTo.map(page => (
        <NavigationItem isActive={page.isStartPage}>
          <i className={page.navigationPictogram}></i>
        </NavigationItem>
      ))}
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

const NavigationItem = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  justify-self: stretch;
  color: $color-white;
  font-size: 2.2rem;
  background-color: transparent;
  margin: 0;
  padding: 0;
  color: ${props => props.isActive && '#0d293f'};
  }
  &:hover {
    background: #8e8baa;
  }
`
