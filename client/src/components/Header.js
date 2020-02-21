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
  height: fit-content;
  margin: 0;
  width: 100vw;
`
const Logo = styled.img`
  display: flex;
`

const HeaderTitle = styled.h1`
  flex-grow: 1;
  color: $color-white;
  font-size: calc(10px + 2vmin);
`
