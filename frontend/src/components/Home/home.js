import React, { useEffect } from "react";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [user, setUser] = React.useState("");

  // useEffect(() => {
  //   axios

  //     .get("http://localhost:3006/auth/refresh", { withCredentials: true })
  //     .then((response) => {
  //       setUser(response.data.id);
  //       console.log(response);
  //     });
  // }, []);

  return (
    <>
      <div className="home">
        <h1>{user ? "Hi" + user : "You are not logged in"}</h1>
        <div class="container">
          <img src="/Images/Logo/logo_NoBG.png" alt="logo" />
          <div class="text-overlay">
            <h2>
              "Discover Events, Jobs, and Accommodations – Everything You Need,
              All in One Place!"
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
