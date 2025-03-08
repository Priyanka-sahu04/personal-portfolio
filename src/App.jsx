import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import Contact from "./Contact";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
