import React from 'react';
import CardComponent from './CardComponent';

const ImageListComponent = props => {
  const images = props.images.map(image => {
    return <CardComponent key={image.id} image={image} />;
  });

  return <div className="img__container">{images}</div>;
};

export default ImageListComponent;
