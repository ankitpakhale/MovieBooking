import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Assets/index.css";
import "./Assets/index.scss";
import "./Assets/style.css";

import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

import About from "./Components/About";
import Booking from "./Components/Booking";
import Contact from "./Components/Contact";
import Index from "./Components/Index";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UpcomingMovie from "./Components/UpcomingMovie";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="py-3">
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/booking" exact element={<Booking />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/upcomingmovies" exact element={<UpcomingMovie />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
