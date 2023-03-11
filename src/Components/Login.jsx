import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="card bg-dark col-5 ms-auto me-auto mt-5">
          <h2 className="bg-secondary text-white text-center p-3 m-0">Login</h2>
          <form className="p-2 mt-3">
            <div className="mb-3 row">
              <label
                for="staticEmail"
                className="col-sm-2 text-white ps-2 col-form-label"
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
                className="col-sm-2 text-white ps-2 col-form-label"
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
            <span className="text-white"> Don,t have an account </span>

            <Link to="/register" className="text-secondary ">
              Register Here
            </Link>
            <div className="text-center mt-3 mb-3">
              <button className="text-center btn btn-outline-secondary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
