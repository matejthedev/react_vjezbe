import { useState, useEffect } from 'react'

const Users = () => {
  const [ users, setUsers ] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <>
    {
      users.length && 
      <div>
        <h2>{users[0].name}</h2>
        <h3>{users[0].address.city}</h3>
      </div>
    }
    </>
  )
}

export default Users