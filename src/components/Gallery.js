   // src/components/Gallery.js
   import React from 'react';
   import ImageItem from './ImageItem';
   import { GalleryData } from './GalleryData';
   import { Container, Row, Col } from 'react-bootstrap';

   const Gallery = () => {
       return (
           <Container>
               <Row>
                   {GalleryData.map((image) => (
                       <Col xs={6} md={4} lg={3} key={image.id}>
                           <ImageItem image={image} />
                       </Col>
                   ))}
               </Row>
           </Container>
       );
   };

   export default Gallery;