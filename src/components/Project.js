import React from 'react';
import Tilt from 'react-vanilla-tilt';
import '../style/Project.css';

function Gallery(props) {
  const { title, subtitle, description, url, linktext, techstack } = props;
  return (
    <Tilt className="Project">
      <h3>{subtitle}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      {techstack ? <p className="techstack">Techstack: {techstack}</p> : ''}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {linktext}
      </a>
    </Tilt>
  );
}
export default Gallery;
