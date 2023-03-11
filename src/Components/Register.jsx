import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="container">
        <div className="card bg-dark col-5 ms-auto me-auto mt-5">
          <h2 className="bg-secondary text-white text-center p-3 m-0">
            Create Account
          </h2>
          <form className="p-2 mt-3">
            <div className="mb-3 row">
              <label
                for="name"
                className="col-sm-2 ps-2 text-white col-form-label"
              >
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                for="Email"
                className="col-sm-2 ps-2 text-white col-form-label"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                for="inputPassword"
                className="col-sm-2 ps-2 text-white col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                for="name"
                className="col-sm-2 ps-2 text-white col-form-label"
              >
                Number
              </label>
              <div className="col-sm-10">
                <input
                  type="Number"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Your Number"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                for="name"
                className="col-sm-2 ps-2 text-white col-form-label"
              >
                Gender
              </label>
              <div className="col-sm-10">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="male"
                />
                <label
                  className="form-check-label text-white"
                  for="flexRadioDefault2"
                >
                  Male
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="female"
                />
                <label
                  className="form-check-label text-white"
                  for="flexRadioDefault2"
                >
                  Female
                </label>
              </div>
            </div>
            <div className="mb-3 row">
              <label
                for="DOB"
                className="col-sm-2 ps-2 text-white col-form-label"
              >
                DOB
              </label>
              <div className="col-sm-10">
                <input
                  type="Date"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <span className="text-white"> Allready have an account </span>
            <Link to="/login" className="text-secondary">
              Login Here
            </Link>
            <div className="text-center mt-3 mb-3">
              <button className="text-center btn btn-outline-secondary">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
