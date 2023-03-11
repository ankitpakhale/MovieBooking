import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0" id="footerborder">
        <footer className="text-center text-white bg-dark">
          <div className="container">
            <section className="mt-5">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/" className="a text-white">
                      Home
                    </Link>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/upcomingmovies" className="a text-white">
                      Upcomming
                    </Link>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/booking" className="a text-white">
                      Booking
                    </Link>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/about" className="a text-white">
                      About
                    </Link>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/contact" className="a text-white">
                      Contact
                    </Link>
                  </h6>
                </div>
              </div>
            </section>

            <hr className="my-5" />
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt distinctio earum repellat quaerat voluptatibus placeat
                    nam, commodi optio pariatur est quia magnam eum harum
                    corrupti dicta, aliquam sequi voluptate quas.
                  </p>
                </div>
              </div>
            </section>
            <section className="text-center mb-5">
              <a href="" className="a text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="a text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="a text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="a text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="a text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="a text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright
            <Link className="text-white" to="/">
              Movie
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
