import React, { useEffect } from "react";
import "./profile.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { auth, setAuth } = useAuth();
  const user = auth.user;
  console.log("USER", user);

  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({});
    navigate("/sign-in");
  };

  return (
    <>
      <div className="btnEdit">
        <button class="button button2" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div class="userProfileParent">
        <div class="div1u">
          <div className="profileCard">
            <img src="/pp.jpg" alt="profilePic" className="profilePic" />
          </div>
        </div>
        <div class="div2u">
          <div className="UPDesc">
            <h3>Name: {user.userName}</h3>
          </div>
          <div className="UPDesc">
            <h3>Email: {user.email}</h3>
          </div>
          <div className="UPDesc">
            <h3>Contact: {user.phoneNumber}</h3>
          </div>
          <div className="UPDesc">
            <h3>Address: asdasd</h3>
          </div>
        </div>
        {/* <div class="div3u"></div> */}
      </div>
    </>
  );
};

export default UserProfile;
