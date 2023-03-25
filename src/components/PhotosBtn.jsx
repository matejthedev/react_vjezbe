import React from 'react'
import styles from './PhotosBtn.module.css'

const PhotosBtn = ({setPage}) => {
  return (
    <button className={styles.btn} onClick={() => setPage("photos")}>Photos</button>
  )
}

export default PhotosBtn