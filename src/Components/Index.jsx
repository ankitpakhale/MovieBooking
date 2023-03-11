import React from "react";
const Index = () => {
  return (
    <>
      <div id="carouselHero" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("../Assets/image/image1.jpg")}
              class="d-block w-100"
              alt="Image Description"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Premium Theater Seating</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                magnam perferendis, similique saepe quas pariatur deleniti
                ratione dolorum, consequatur ea incidunt, quo corporis suscipit
                culpa atque ipsum possimus exercitationem commodi!
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../Assets/image/image2.jpg")}
              class="d-block w-100"
              alt="POW Logo"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>High-resolution</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, praesentium voluptatibus quasi ad voluptas fugit
                voluptates blanditiis architecto. Totam tempore recusandae nisi
                nostrum aut? Sint provident sed voluptatibus corporis non.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card border-0 mt-5 col-3 bg-dark">
          <img
            src={require("../Assets/image/movi.jpg")}
            height="450px"
            width="98%"
          />
          <h2 class="text-white">Abc Movie</h2>
        </div>
        <div class="card border-0 mt-5 col-3 bg-dark">
          <img
            src={require("../Assets/image/movi1.jpg")}
            height="450px"
            width="98%"
          />
          <h2 class="text-white">Abc Movie</h2>
        </div>
        <div class="card border-0 mt-5 col-3 bg-dark">
          <img
            src={require("../Assets/image/movi2.jpg")}
            height="450px"
            width="98%"
          />

          <h2 class="text-white">Abc Movie</h2>
        </div>
        <div class="card border-0 mt-5 col-3 bg-dark">
          <img
            src={require("../Assets/image/movi3.jpg")}
            height="450px"
            width="98%"
          />

          <h2 class="text-white">Abc Movie</h2>
        </div>
      </div>
      <h1 class="text-white text-center m-5 border-bottom-5">About US</h1>
      <div class="container-fluid">
        <h2 class="text-white text-center mt-5">
          Enjoy Online Ticket Booking for Movies in India With Movie
        </h2>
        <div class="row">
          <div class="col-8 mt-5">
            <p class="text-white justify-content-between mt-5">
              If you are planning for <strong>movie ticket bookings</strong> for
              the latest movies in India, don't look any further. Now it is easy
              to get on with <strong>online ticket booking</strong> with
              BookMyShow. Your one-stop solution for movies to watch this
              weekend. Everyone enjoys watching their favorite movies on the big
              screen, and the excitement of watching it with friends is
              unparalleled. If you have been eagerly waiting for a movie that
              you can watch with your friends and family, now you know where to
              get the tickets from. When you watch a film in a cinema theatre,
              you get to watch it on a massive screen with surround-sound, and
              that enhances your movie-watching experience. Thus, allowing you
              to be a part of the actual movie. Get to know about{" "}
              <strong>all movies</strong> and
              <strong>movie trailers</strong> to watch here. Also, know
              <strong>how to book movie tickets</strong>
            </p>
          </div>
          <div class="col-4 mt-5">
            <img
              src={require("../Assets/image/movie.png")}
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
