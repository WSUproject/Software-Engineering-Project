import Navbar from "./components/navBar/navIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Contact from "./components/ContactUs/Contact";
import Job from "./components/Jobs/Job";
import Accommodation from "./components/Accommodations/Accommodations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/accommodations" element={<Accommodation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
