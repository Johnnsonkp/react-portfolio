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
import { TechStackFullWidthContainer } from "./components/common/frame/Frame";
import { useWindowSize } from "./components/utils/utilFunctions";

function App() {
  const LIGHT_COLOR = process.env.REACT_APP_LIGHT_COLOR;
  const DARK_COLOR = process.env.REACT_APP_DARK_COLOR;
  const DARK_FONT_COLOR = process.env.REACT_APP_DARK_FONT_COLOR;
  const [mode, setMode] = useState(true);
  const size = useWindowSize();

  const data = {
    mode: mode,
    setMode: setMode,
    lightColor: LIGHT_COLOR,
    darkColor: DARK_COLOR,
    darkFontColor: DARK_FONT_COLOR,
  };

  return (
    <Router>
      <div className="App">
        <Navbar {...data} />
        <Home {...data} />
        <About {...data} />
        <Portfolio {...data} />
        <TechStackFullWidthContainer size={size} />
        <Blog {...data} />
        <Contact {...data} />
        <Footer {...data} />
      </div>
    </Router>
  );
}

export default App;
