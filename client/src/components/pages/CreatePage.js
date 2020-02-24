import React, { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import UsersVisualisation from './UsersVisualisation'
import styled from 'styled-components/'

export default function CreatePage({
  usersByRole,
  handleDeleteUser,
  handleCreateUser,
}) {
  const [users, setUsers] = useState({
    newUserName: '',
    userToDelete: '',
  })

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const form = event.target
  //   onSubmit(card)
  //   form.reset()
  //   setCard({})
  //   form[0] && form[0].focus()
  // }

  return (
    <CreatePageContainer>
      <UsersVisualisation users={usersByRole} setUsers={setUsers} />

      <Switch>
        <Route path="/members/create-user">
          <Form onSubmit={sendDataToState}>
            <InputField
              type="text"
              name="newUserName"
              placeholder="New user"
              value={users.newUserName}
              onChange={updateInputText}
            />
            <Button type="submit">Create new user</Button>
          </Form>
        </Route>
        <Route path="/members/delete-user">
          <Form onSubmit={sendDataToState}>
            <InputField
              type="text"
              name="singleDataToDelete"
              placeholder="Id of user to delete"
              value={users.singleDataToDelete}
              onChange={updateInputText}
            />
            <Button type="submit">Delete user</Button>
          </Form>
        </Route>
      </Switch>

      <Options>
        <LinkStyled exact to="/members/create-user">
          <i className="fas fa-user-plus"></i>
        </LinkStyled>
        <LinkStyled to="/members/delete-user">
          <i className="fas fa-user-slash"></i>
        </LinkStyled>
      </Options>
    </CreatePageContainer>
  )

  function updateInputText(event) {
    setUsers({ ...users, [event.target.name]: event.target.value })
  }

  function sendDataToState(event) {
    event.preventDefault()
    if (handleDeleteUser) {
      handleDeleteUser(event.target.userToDelete)
    }
    if (handleCreateUser) {
      handleCreateUser(event.target.newUserName.value)
    }
  }
}

const CreatePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  grid-template-rows: auto auto 15%;
  grid-template-areas: 'space' 'form' 'page-footer';
  margin: 0;
  height: 100%;
  color: #8681b4;
`

const Form = styled.form`
  display: flex;
  grid-area: form;
  flex-wrap: wrap;
  border: 8px;
  border-color: $color-primary-darker;
  justify-content: center;
  align-items: flex-end;
`
const Options = styled.section`
  display: flex;
  flex-grow: 1;
  grid-area: page-footer;
  margin: 0;
  justify-content: space-evenly;
  align-items: flex-end;
`
const LinkStyled = styled(NavLink)`
  color: white;
  justify-content: space-evenly;
  align-items: center;
  font-size: 80px;
  margin: 0;
  max-width: 100%;
`

const Button = styled.button`
  background-color: #fff;
  font-size: 1.1em;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 4px;
  border-radius: 8px;
  margin: 12px;
  padding: 8px 24px;
  max-width: 200px;
`
const InputField = styled.input`
  background-color: beige;
  font-size: 1.1em;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 4px;
  border-radius: 8px;
  margin: 12px;
  padding: 8px 24px;
`
