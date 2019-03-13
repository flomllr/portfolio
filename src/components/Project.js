import React from 'react';
import '../style/Project.css';

function Gallery(props) {
  const { title, subtitle, description, url, linktext, techstack } = props;
  return (
    <div className="Project">
      <h3>{subtitle}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      {techstack ? <p className="techstack">Techstack: {techstack}</p> : ''}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {linktext}
      </a>
    </div>
  );
}
export default Gallery;
