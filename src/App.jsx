import React from "react";
import Navbar from "./Navbar";
import Home from "./Homepage";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
