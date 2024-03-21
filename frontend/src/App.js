import Navbar from "./components/navBar/navIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Contact from "./components/ContactUs/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
