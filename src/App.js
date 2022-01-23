import "./App.css";

import {
  About,
  Blog,
  Contact,
  Footer,
  Home,
  LightDark,
  Navbar,
  Portfolio,
} from "./components/index";
import { Route, Routes, useNavigate } from "react-router-dom";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import "antd/dist/antd.css";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Home />
        <LightDark />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
