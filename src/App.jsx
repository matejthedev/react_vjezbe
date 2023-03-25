import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Users from './components/Users'
import Photos from './components/Photos'
import Form from './components/Form'
import UsersBtn from './components/UsersBtn'
import PhotosBtn from './components/PhotosBtn'

function App() {
  const [page, setPage] = useState()

  // const btn = {
  //   color: "red",
  //   backgroundColor: "green"
  // }
  return (
    <>
      <Form setPage={setPage}/>
      <br />
      <br />
      <UsersBtn setPage={setPage}/>
      <PhotosBtn setPage={setPage}/>
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
