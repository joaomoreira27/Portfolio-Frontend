import React from 'react';

function AboutMe(props) {
  return (
    <div>
      <h2>About Me</h2>
      <p><strong>A passionate software developer.</strong> {props.description}</p>
    </div>
  );
}

export default AboutMe;
