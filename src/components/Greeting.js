import React from 'react';
import '../style/Greeting.css';

function Greeting() {
  return (
    <p className="Greeting">
      Hi there!
      <br />
      My Name is <span className="strong">Florian Müller</span> and I&#39;m a CS
      student from Munich, Germany. Here are some of my projects.
    </p>
  );
}
export default Greeting;
