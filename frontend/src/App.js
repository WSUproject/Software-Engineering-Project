import Navbar from "./components/navBar/navIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Contact from "./components/ContactUs/Contact";
import Job from "./components/Jobs/Job";
import Accommodation from "./components/Accommodations/Accommodations";
import MainI from "./components/Events/MainI";
import NotFoundView from "./components/Error/Error404";
import JobPostForm from "./components/JobPost/JobPost";
import AccomodationPostForm from "./components/AccomodationPost/Accommodationpost";
import EventPostForm from "./components/EventPost/EventPost";
import UserProfile from "./components/UserProfile/UserProfile";
import LoginForm from "./components/Login/login";
import SignupForm from "./components/Signup/Signup";
import UpdateJob from "./components/JobPost/UpdateJob";
import RequireRole from "../src/utils/RequireRole";
import RequireAuth from "../src/utils/RequireAuth";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/sign-in" element={<LoginForm />} />
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/accommodations" element={<Accommodation />} />
          <Route path="/events" element={<MainI />} />
          <Route path="/jobs/CreateJobForm" element={<JobPostForm />} />
          <Route
            path="/accommodations/CreateAccommodationForm"
            element={<AccomodationPostForm />}
          />
          <Route path="/events/CreateEventForm" element={<EventPostForm />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/updateJob/:id" element={<UpdateJob />} />
        </Route>

        <Route path="*" element={<NotFoundView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
