import React from 'react'
import { Card } from 'react-bootstrap'

const PhotosCard = ({title, thumbnailUrl, id}) => {
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnailUrl} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PhotosCard