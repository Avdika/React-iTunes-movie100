import React from 'react';

function About(props) {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);
  return (
    <div>
      <p>This implements the basic functionality of the iTunes API for finding top 100 movies.</p>
      <p>Technologies used: HTML, JavaScript, React, SCSS </p>
    </div>
  );
}

export default About;
