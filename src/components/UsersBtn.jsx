import React from 'react'
import styles from './UsersBtn.module.css'
import Button from 'react-bootstrap/Button';

const UsersBtn = ({setPage}) => {
  return (
    <Button variant="success" onClick={() => setPage("users")}>Users</Button>
  )
}

export default UsersBtn