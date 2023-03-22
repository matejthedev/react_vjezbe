import { useState, useEffect } from 'react'
import UserCard from './UserCard'

const Users = () => {
  const [ users, setUsers ] = useState()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
    {
      users &&
      users.map(({id, name, address}) => <UserCard key={id} name={name} city={address.city} />)
    }
    </div>
  )
}

export default Users