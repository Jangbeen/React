// import { useState, useEffect } from "react";
// import Movie from "./componenets/Movie";
import Home from "./routes/Home";
import About from "./routes/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;
