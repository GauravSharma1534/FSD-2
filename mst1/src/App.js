import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <Router>
      <div className="container">

        <h1>University Portal</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;