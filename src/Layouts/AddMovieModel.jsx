import React from "react";

const AddMovieModel = () => {
  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-secondary text-white">
              <h4 className="modal-title">Add Movie</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body bg-dark">
              <form className="p-2 mt-3">
                <div className="mb-3 row">
                  <label
                    for="name"
                    className="col-sm-2 text-white col-form-label ps-0"
                  >
                    Movie
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter Movie Name"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    for="name"
                    className="col-sm-2 text-white col-form-label ps-0"
                  >
                    Screen
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="Number"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter Screen number"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    for="name"
                    className="col-sm-2 text-white col-form-label ps-0"
                  >
                    Status
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="available"
                      checked
                    />
                    <label
                      className="form-check-label text-white"
                      for="flexRadioDefault2"
                    >
                      Available
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="unavailable"
                    />
                    <label
                      className="form-check-label text-white"
                      for="flexRadioDefault2"
                    >
                      Unavailable
                    </label>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    for="DOB"
                    className="col-sm-2 text-white col-form-label ps-0"
                  >
                    Release
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="Date"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    for="DOB"
                    className="col-sm-2 text-white col-form-label ps-0"
                  >
                    Description
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    for="DOB"
                    className="col-sm-2 text-white col-form-label ps-0"
                  >
                    Poster
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>

                <div className="text-center mt-3 mb-3">
                  <button className="text-center btn btn-outline-secondary">
                    Add Movie
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovieModel;
