import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="map">
        <iframe
          src="https://snazzymaps.com/embed/2369"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>

      <div className="content">
        <div className="contact">
          <div className="other">
            <div className="info">
              <h2>More Methods</h2>
              <h3>Email</h3>
              <div className="svg-wrap">
                <Link to="/contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 485.211 485.211"
                  >
                    <path d="M485.21 363.906c0 10.637-2.99 20.498-7.784 29.174l-153.2-171.41 151.54-132.584c5.894 9.355 9.445 20.344 9.445 32.22v242.6zM242.607 252.793l210.863-184.5c-8.654-4.737-18.398-7.642-28.91-7.642H60.65c-10.523 0-20.27 2.906-28.888 7.643l210.844 184.5zm58.787-11.162l-48.81 42.735c-2.854 2.487-6.41 3.73-9.977 3.73-3.57 0-7.125-1.243-9.98-3.73l-48.82-42.736-155.14 173.6c9.3 5.834 20.198 9.33 31.984 9.33h363.91c11.785 0 22.688-3.496 31.984-9.33l-155.15-173.6zM9.448 89.086C3.554 98.44 0 109.43 0 121.305v242.602c0 10.637 2.978 20.498 7.79 29.174L160.97 221.64 9.448 89.086z" />
                  </svg>
                  movie@gmail.com
                </Link>
              </div>
              <h3>Connect</h3>
            </div>
          </div>
          <div className="form">
            <h1>Get In Touch</h1>
            <form action="">
              <div className="flex-rev">
                <input
                  type="text"
                  placeholder="Connor Gaunt"
                  name="name"
                  id="name"
                />
                <label for="name">Full Name</label>
              </div>
              <div className="flex-rev">
                <input
                  type="email"
                  placeholder="connor@connorgaunt.com"
                  name="email"
                  id="email"
                />
                <label for="email">Your Email</label>
              </div>

              <div className="flex-rev">
                <textarea
                  placeholder="I have an idea for a project...."
                  name="message"
                  id="message"
                ></textarea>
                <label for="message">Email Message</label>
              </div>
              <button>Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
