import { useState, useEffect } from 'react'

const Photos = () => {
  const [ photos, setPhotos ] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => setPhotos(data))
  },[])
  return(
    <>
    {
      photos.length && 
      <div>
        <h2>{photos[0].title}</h2>
        <img src={photos[0].thumbnailUrl} />
      </div>
    }
    </>
  )
}

export default Photos