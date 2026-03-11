import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Lazy-loaded pages
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <div
      style={{
        padding: "25px",
        textAlign: "center",
        backgroundColor: "#f2f4ff",
        minHeight: "100vh"
      }}
    >
      <h2 style={{ color: "#3f51b5" }}>
        Experiment 5: SPA Lazy Loading
      </h2>

      <p>
    
    
        <strong>UID:</strong> 23BDA70050
      </p>

      {/* Navigation */}
      <nav style={{ margin: "15px 0" }}>
        <Link to="/" style={{ margin: "0 12px", fontWeight: "bold" }}>
          Home
        </Link>
        |
        <Link to="/about" style={{ margin: "0 12px", fontWeight: "bold" }}>
          About
        </Link>
        |
        <Link to="/contact" style={{ margin: "0 12px", fontWeight: "bold" }}>
          Contact
        </Link>
      </nav>

      <hr />

      {/* Lazy loading + Routing */}
      <Suspense fallback={<h3>Loading Component...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <footer style={{ marginTop: "40px", fontSize: "14px", color: "#f02d2d" }}>
        © 2026 Gaurav Sharma | UID-23BDA70050
      </footer>
    </div>
  );
}

export default App;
