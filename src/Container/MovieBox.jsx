import React from "react";
import { Link } from "react-router-dom";

const MovieBox = ({ img, name }) => {
  return (
    <>
      <div className="card border-0 mt-5 col-3 bg-dark">
        <Link to="/booking">
          <img
            // src={require(`../Assets/image/`)}
            src={img}
            height="450px"
            width="98%"
          />
        </Link>
        <h2 className="text-white">{name}</h2>
      </div>
    </>
  );
};

export default MovieBox;
