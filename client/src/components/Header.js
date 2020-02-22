import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ render }) {
  return (
    <HeaderStyled>
      <Logo src={render.headerLogoSrc} alt={render.headerLogoAlt} />
      <HeaderTitle>{render.headerTitle}</HeaderTitle>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: center;
  margin: 0;
`
const Logo = styled.img`
  display: flex;
  height: 100px;
`

const HeaderTitle = styled.h1`
  color: $color-white;
  font-size: calc(15px + 2vmin);
`
