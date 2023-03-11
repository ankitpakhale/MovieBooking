import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/upcomingmovies">
                  Upcomming Movie
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/booking">
                  Booking
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/contact">
                  Contact US
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="#">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
