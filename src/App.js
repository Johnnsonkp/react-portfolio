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
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(true);
  const LIGHT_COLOR = process.env.REACT_APP_LIGHT_COLOR;
  const DARK_COLOR = process.env.REACT_APP_DARK_COLOR;
  const data = {
    mode: mode,
    setMode: setMode,
    lightColor: LIGHT_COLOR,
    darkColor: DARK_COLOR,
  };

  return (
    <Router>
      <div className="App">
        <Navbar {...data} />
        <Home {...data} />
        {/* <LightDark /> */}
        <About {...data} />
        {/* <Portfolio /> */}
        {/* <Blog /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
