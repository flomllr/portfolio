import React from 'react';
import '../style/Gallery.css';

function Gallery(props) {
  const { children } = props;
  return <div className="Gallery">{children}</div>;
}
export default Gallery;
