import React from 'react'
import styled from 'styled-components'

export default function DataVisualisation() {
  return <DataVisualisationStyled></DataVisualisationStyled>
}

const DataVisualisationStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 8px;
  grid-area: stage;
  display: flex;
  overflow-y: auto;
  background: $color-background;
  color: $color-white;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`
