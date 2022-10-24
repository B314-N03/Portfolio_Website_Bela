import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Projects from "./projects";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
