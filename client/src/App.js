import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import DataVisualisation from './components/DataVisualisation'
import ComponentForm from './components/ComponentForm'
import Navigation from './components/Navigation'
import styled from 'styled-components/macro'

function App() {
  const [data, setData] = useState([{ id: '001', name: 'Data in array' }])

  const [designData, setDesignData] = useState({
    headerLogoSrc: 'https://via.placeholder.com/260x80',
    headerLogoAlt: '',
    headerTitle: 'Rehearsal Room',
  })
  const [navigationData, setNavigationData] = useState([
    {
      name: 'Start Page',
      pageClassName: 'start',
      contentText: 'Just the start page.',
      navigationPictogram: 'fa-home',
      isStartPage: true,
    },
    {
      name: 'Users Page',
      pageClassName: 'users',
      navigationPictogram: 'fa-folder-plus',
    },
    {
      name: 'Profile Page',
      pageClassName: 'profile',
      navigationPictogram: 'fa-user',
    },
  ])
  return (
    <Grid>
      <Header render={designData} />
      <Main>
        <DataVisualisation transferedData={data} />
        <ComponentForm handleDelete={deleteData} handleAdd={addData} />
      </Main>
      <Navigation pagesToNavigateTo={navigationData} />
    </Grid>
  )

  function addData(SingleDataToAdd) {
    setData([...data, { id: Math.random(), name: SingleDataToAdd }])
  }

  function deleteData(id) {
    const index = data.findIndex(singleData => singleData.id === id)
    setData([...data.slice(0, index), ...data.slice(index + 1)])
  }
}
const Grid = styled.div`
  display: grid;
  grid-template-rows: 120px auto 15%;
  grid-template-areas: 'header' 'stage' 'footer';
  height: 100vh;
  margin: 0;
  width: 100%;
`

export default App
