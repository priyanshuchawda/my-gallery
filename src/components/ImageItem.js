   // src/components/ImageItem.js
   import React from 'react';
   import { Card } from 'react-bootstrap';

   const ImageItem = ({ image }) => {
       return (
           <Card style={{ margin: '10px' }}>
               <Card.Img variant="top" src={image.src} alt={image.alt} />
               <Card.Body>
                   <Card.Title>{image.alt}</Card.Title>
               </Card.Body>
           </Card>
       );
   };

   export default ImageItem;