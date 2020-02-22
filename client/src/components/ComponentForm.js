import React, { useState } from 'react'
import styled from 'styled-components/'

export default function ComponentForm({ handleDelete, handleAdd }) {
  const [data, setData] = useState({
    newSingleData: '',
    singleDataToDelete: '',
  })

  return (
    <FormPage>
      <Form onSubmit={sendDataToState} className="form">
        <InputField
          type="text"
          name="newSingleData"
          placeholder="New data"
          value={data.newSingleData}
          onChange={updateInputText}
        />
        <Button type="submit">Submit new data</Button>
      </Form>
      <Form>
        <InputField
          type="text"
          name="singleDataToDelete"
          placeholder="Id of data to delete"
          value={data.singleDataToDelete}
          onChange={updateInputText}
        />
        <Button>Delete data</Button>
      </Form>
    </FormPage>
  )

  function updateInputText(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function sendDataToState(event) {
    event.preventDefault()
    const newData = event.target.newSingleData.value
    const dataToDelete = event.target.singleDataToDelete
    handleDelete(dataToDelete)
    handleAdd(newData)
  }
}

const FormPage = styled.div`
  display: grid;
  grid-template-rows: ;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  border: 8px;
  border-color: $color-primary-darker;
  justify-content: center;
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
