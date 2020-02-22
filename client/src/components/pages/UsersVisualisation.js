import React from 'react'
import styled from 'styled-components'

export default function UsersVisualisation({ users }) {
  return (
    <Visualisation>
      {users.map(user => (
        <ListItemRow key={user._id}>
          {user.name}
          <h4>ID: {user._id}</h4>
          <ul css="padding: 0; margin: 0;">
            {user.roles && user.roles.map(role => <Tag key={role}>{role}</Tag>)}
          </ul>
        </ListItemRow>
      ))}
    </Visualisation>
  )
}

const Visualisation = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 8px;
  grid-area: space;
  background: transparent;
  color: white;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`
const ListItemRow = styled.article`
  display: flex;
`

const Tag = styled.li`
  display: inline-block;
  font-size: 0.8em;
  padding: 0 6px;
  background: beige;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 4px;
  color: #135285;
  font-weight: bold;
`
