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
