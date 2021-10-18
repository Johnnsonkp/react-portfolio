import React from "react";
import "./App.css";
import {
  Navbar,
  Footer,
  Home,
  LightDark,
  About,
  Contact,
  Blog,
  Portfolio,
} from "./components/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <LightDark />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
