import React from 'react'
import { useState } from 'react'
import {Button, Form} from 'react-bootstrap'

const FormComponent = ({setPage}) => {

  const [input, setInput] = useState()

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const pageHandler = (event) => {
    event.preventDefault()
    setPage(input)
  }
  return (
     <Form onSubmit={pageHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Set Page</Form.Label>
        <Form.Control type="text" placeholder="Enter page" onChange={inputHandler} />
        <Form.Text className="text-muted">
         Insert the data you want to get.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Change Page
      </Button>
    </Form>
  )
}

export default FormComponent