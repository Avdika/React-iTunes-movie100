import React from "react";

const MovieDetails = props => {
  return (
    <div className="details-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {/* <p>Artist: {props.details["im:artist"].label}</p> */}
        {props.content}
      </div>
    </div>
  );
};

export default MovieDetails;
