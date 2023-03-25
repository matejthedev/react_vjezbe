import { useState, useEffect } from 'react'
import PhotosCard from "./PhotosCard"

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
      photos.slice(0, 10).map(({id, title, thumbnailUrl}) => <PhotosCard key={id} id={id} title={title} thumbnailUrl={thumbnailUrl} /> )
    }
    </>
  )
}

export default Photos