import React from "react";
const Booking = () => {
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row">
          <div className="col-md-6 text-center">
            <button
              id="bookingbutton"
              data-bs-toggle="modal"
              data-bs-target="#resentbookingmodal"
              type="button"
            >
              Resent Booking
            </button>
          </div>
          <div className="col-md-6 text-center">
            <button
              id="bookingbutton"
              data-bs-toggle="modal"
              data-bs-target="#bookshowmodal"
              type="button"
            >
              Book Show
            </button>
          </div>
        </div>
        {/* resent booking  */}
        <div className="modal" id="resentbookingmodal">
          <div className="modal-dialog">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h4 className="modal-title text-white">Resent Booking</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card bg-dark text-white p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        <div className="col-6">Movi Name</div>
                        <div className="col-6">Abc</div>
                      </div>
                      <div className="row">
                        <div className="col-6">Screen</div>
                        <div className="col-6">3</div>
                      </div>
                      <div className="row">
                        <div className="col-6">Set Number</div>
                        <div className="col-6">3,8,9</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="row">
                        <div className="col-12">01-01-2012</div>
                      </div>
                      <div className="row">
                        <div className="col-12">10:30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* book show  */}
        <div className="modal" id="bookshowmodal">
          <div className="modal-dialog modal-xl">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h4 className="modal-title text-white">Book Show</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card bg-dark text-white p-3">
                  <div className="row">
                    <div className="col-9">
                      <div className="row">
                        <div className="col-2">Name</div>
                        <div className="col-10">ABC</div>
                      </div>
                      <div className="row">
                        <div className="col-2">Description</div>
                        <div className="col-10">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Officiis ex omnis, quidem laborum quasi alias
                          incidunt dolore commodi libero ut error veritatis
                          ipsum corrupti sit itaque nostrum. Libero, ipsa aut!
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">Screen</div>
                        <div className="col-10">3</div>
                      </div>
                      <div className="row">
                        <div className="col-2">Date</div>
                        <div className="col-10">01-01-2012</div>
                      </div>
                      <div className="row">
                        <div className="col-2">Time</div>
                        <div className="col-10">10:30</div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="movieimage">
                        <img
                          src={require("../Assets/image/movi1.jpg")}
                          height="200px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="plane ms-5">
                    <div className="exit exit--front fuselage"></div>
                    <ol className="cabin fuselage">
                      <li className="row row--1">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="1A" />
                            <label for="1A">1A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="1B" />
                            <label for="1B">1B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="1C" />
                            <label for="1C">1C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" disabled id="1D" />
                            <label for="1D">Occupied</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="1E" />
                            <label for="1E">1E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="1F" />
                            <label for="1F">1F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="1G" />
                            <label for="1G">1G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="1H" />
                            <label for="1H">1H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="1I" />
                            <label for="1I">1I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--2">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="2A" />
                            <label for="2A">2A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2B" />
                            <label for="2B">2B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2C" />
                            <label for="2C">2C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2D" />
                            <label for="2D">2D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2E" />
                            <label for="2E">2E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2F" />
                            <label for="2F">2F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2G" />
                            <label for="2G">2G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2H" />
                            <label for="2H">2H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="2I" />
                            <label for="2I">2I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--3">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="3A" />
                            <label for="3A">3A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3B" />
                            <label for="3B">3B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3C" />
                            <label for="3C">3C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3D" />
                            <label for="3D">3D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3E" />
                            <label for="3E">3E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3F" />
                            <label for="3F">3F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3G" />
                            <label for="3G">3G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3H" />
                            <label for="3H">3H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="3I" />
                            <label for="3I">3I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--4">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="4A" />
                            <label for="4A">4A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4B" />
                            <label for="4B">4B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4C" />
                            <label for="4C">4C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4D" />
                            <label for="4D">4D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4E" />
                            <label for="4E">4E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4F" />
                            <label for="4F">4F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4G" />
                            <label for="4G">4G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4H" />
                            <label for="4H">4H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="4I" />
                            <label for="4I">4I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--5">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="5A" />
                            <label for="5A">5A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5B" />
                            <label for="5B">5B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5C" />
                            <label for="5C">5C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5D" />
                            <label for="5D">5D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5E" />
                            <label for="5E">5E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5F" />
                            <label for="5F">5F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5G" />
                            <label for="5G">5G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5H" />
                            <label for="5H">5H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="5I" />
                            <label for="5I">5I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--6">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="6A" />
                            <label for="6A">6A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6B" />
                            <label for="6B">6B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6C" />
                            <label for="6C">6C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6D" />
                            <label for="6D">6D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6E" />
                            <label for="6E">6E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6F" />
                            <label for="6F">6F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6G" />
                            <label for="6G">6G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6H" />
                            <label for="6H">6H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="6I" />
                            <label for="6I">6I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--7">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="7A" />
                            <label for="7A">7A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7B" />
                            <label for="7B">7B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7C" />
                            <label for="7C">7C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7D" />
                            <label for="7D">7D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7E" />
                            <label for="7E">7E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7F" />
                            <label for="7F">7F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7G" />
                            <label for="7G">7G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7H" />
                            <label for="7H">7H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="7I" />
                            <label for="7I">7I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--8">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="8A" />
                            <label for="8A">8A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8B" />
                            <label for="8B">8B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8C" />
                            <label for="8C">8C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8D" />
                            <label for="8D">8D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8E" />
                            <label for="8E">8E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8F" />
                            <label for="8F">8F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8G" />
                            <label for="8G">8G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8H" />
                            <label for="8H">8H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="8I" />
                            <label for="8I">8I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--9">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="9A" />
                            <label for="9A">9A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9B" />
                            <label for="9B">9B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9C" />
                            <label for="9C">9C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9D" />
                            <label for="9D">9D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9E" />
                            <label for="9E">9E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9F" />
                            <label for="9F">9F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9G" />
                            <label for="9G">9G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9H" />
                            <label for="9H">9H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="9I" />
                            <label for="9I">9I</label>
                          </li>
                        </ol>
                      </li>
                      <li className="row row--10">
                        <ol className="seats" type="A">
                          <li className="seat">
                            <input type="checkbox" id="10A" />
                            <label for="10A">10A</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10B" />
                            <label for="10B">10B</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10C" />
                            <label for="10C">10C</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10D" />
                            <label for="10D">10D</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10E" />
                            <label for="10E">10E</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10F" />
                            <label for="10F">10F</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10G" />
                            <label for="10G">10G</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10H" />
                            <label for="10H">10H</label>
                          </li>
                          <li className="seat">
                            <input type="checkbox" id="10I" />
                            <label for="10I">10I</label>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Booking;
