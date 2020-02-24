import React, { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getUser, getUsers, patchUser, postUser } from './services/services'
import Header from './components/Header'
import CreatePage from './components/pages/CreatePage'
import Navigation from './components/Navigation'
import styled from 'styled-components/macro'

function App() {
  const [data, setData] = useState([{ id: '001', name: 'Data in array' }])
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  const [designData, setDesignData] = useState({
    headerLogoSrc: '/guitars-logo.png',
    headerLogoAlt: '',
    headerTitle: 'Rehearsal Room',
  })
  const [navigationData, setNavigationData] = useState([
    {
      name: 'Start Page',
      pageClassName: 'start',
      contentText: 'Just the start page.',
      navigationPictogram: 'fa-home',
      navigationPictogramPath: './fa-home.png',
      isStartPage: true,
    },
    {
      name: 'Users Page',
      pageClassName: 'users',
      navigationPictogram: 'fa-folder-plus',
      navigationPictogramPath: './fa-user.png',
    },
    {
      name: 'Profile Page',
      pageClassName: 'profile',
      navigationPictogram: 'fa-user',
    },
  ])

  const { usersByRole } = useRoles(users)

  return (
    <Router>
      <Grid>
        <Header render={designData} />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/members">
            {/* <DataVisualisation transferedData={data} /> */}
            <CreatePage
              handleCreateUser={createUser}
              handleDeleteUser={deleteUser}
              usersByRole={usersByRole}
            />
          </Route>
          <Route path="/profile"></Route>
          <Route path="/settings"></Route>
        </Switch>
        <Navigation pagesToNavigateTo={navigationData} />
      </Grid>
    </Router>
  )

  function addData(SingleDataToAdd) {
    setData([...data, { id: Math.random(), name: SingleDataToAdd }])
  }

  function deleteData(id) {
    const index = data.findIndex(singleData => singleData.id === id)
    setData([...data.slice(0, index), ...data.slice(index + 1)])
  }

  function createUser(userData) {
    postUser(userData).then(user => {
      setUsers([
        ...users,
        { id: user.id ? user.id : Math.random(), name: user.name },
      ])
    })
  }

  function deleteUser(id) {
    const index = users.findIndex(user => user.id === id)
    setUsers([...users.slice(0, index), ...users.slice(index + 1)])
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 120px auto 15%;
  grid-template-areas: 'header' 'stage' 'footer';
  height: 100vh;
  margin: 0;
  width: 100vw;
`

export default App

function useRoles(users) {
  const [selectedRole, selectRoles] = useState('all')

  const roles = useMemo(
    () =>
      Array.from(
        users.reduce((prev, user) => {
          user.roles && user.roles.forEach(role => prev.add(role))
          return prev
        }, new Set())
      ),
    [users]
  )

  const usersByRole = useMemo(
    () =>
      selectedRole === 'all'
        ? users
        : users.filter(user => user.roles && user.roles.includes(selectedRole)),
    [users, selectedRole]
  )

  return { roles, selectedRole, selectRoles, usersByRole }
}
