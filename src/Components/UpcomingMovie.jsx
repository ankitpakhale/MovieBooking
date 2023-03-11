import React from "react";
import MovieBox from "../Container/MovieBox";
import AddMovieModel from "../Layouts/AddMovieModel";

const UpcomingMovie = () => {
  return (
    <>
      <div className="search col-3 mt-5 ms-auto me-auto">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search Movie By Name"
          />
          <button className="btn" type="button">
            <i className="fa fa-search text-white"></i>
          </button>
        </form>
      </div>
      <div className="Add Movie col-1 mt-5 ms-auto">
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Add Movie
        </button>

        <AddMovieModel />
      </div>

      <div className="row">
        <MovieBox
          img={require("../Assets/image/movi.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi1.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi2.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi3.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi4.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi5.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi6.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi7.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi8.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi9.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi10.jpg")}
          name={"Abc Movie"}
        />
        <MovieBox
          img={require("../Assets/image/movi11.jpg")}
          name={"Abc Movie"}
        />
      </div>
    </>
  );
};
export default UpcomingMovie;
