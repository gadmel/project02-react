import React from 'react'
import styled from 'styled-components'

export default function dataVisualisation({ transferedData }) {
  return (
    <DataVisualisation>
      {transferedData.map(singleData => (
        <ListItemRow key={singleData.id}>{singleData.name}</ListItemRow>
      ))}
    </DataVisualisation>
  )
}

const DataVisualisation = styled.section`
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
`
const ListItemRow = styled.article`
  display: flex;
  overflow-y: auto;
`
