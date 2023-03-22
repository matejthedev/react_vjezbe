import { useState, useEffect } from 'react'
import './App.css'
import Users from './components/Users'
import Photos from './components/Photos'

function App() {
  const [page, setPage] = useState()

  // useEffect(() => {
  //   console.log("App mounted")
  // }, [])
  return (
    <>  
    <button onClick={() => setPage("users")}>Users</button>
    <button onClick={() => setPage("photos")}>Photos</button>
      {
        page === "users" && <Users />
      }
      {
        page === "photos" && <Photos />
      }
    </>
  )
}

export default App
