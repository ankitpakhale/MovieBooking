import React from "react";
const About = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-white text-center mt-5">
          Enjoy Online Ticket Booking for Movies in India With Movie
        </h2>
        <div className="row">
          <div className="col-8 mt-5">
            <p className="text-white justify-content-between mt-5">
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
          <div className="col-4 mt-5">
            <img
              src={require("../Assets/image/movie.png")}
              height="100%"
              width="100%"
            />
          </div>
        </div>
        <h2 className="text-white text-center mt-5">
          Latest Movies To Watch in Ahmedabad With Family And Friends
        </h2>
        <div className="row">
          <div className="col-4 mt-5">
            <img
              src={require("../Assets/image/movie.jpeg")}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-8 mt-5">
            <p className="text-white justify-content-between mt-5">
              Each year the cinema world is enlightened with the latest movie
              trailers, increasing the excitement among everyone. This year,
              just like the previous year, you have been waiting for some of the
              biggest<strong>Bollywood movies</strong> to be released with the
              biggest star cast. Enjoy your favourite movie, not just with your
              friends, but in a cinema hall Ahmedabad that will be filled with
              like-minded people. Be a part of everyone's reaction. Dates are
              already announced, and all you need to do is book the tickets for
              the preferred date so that you don't end up missing the first-day
              first show! Don’t worry we have the list of
              <strong>shows near you</strong>
              and
              <strong>movie showtimes</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
