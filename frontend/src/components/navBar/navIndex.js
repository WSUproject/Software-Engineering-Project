import React from "react";
import {
  Nav1,
  Nav2,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navBarElements";
import useAuth from "../../hooks/useAuth";

const Navbar = (props) => {
  const { auth } = useAuth();
  console.log("BBBBBBBBBBBBBBB", auth);

  return (
    <>
      <Nav1>
        <NavLink to="/">
          <img
            src="/Images/Logo/logo_NoBG.png"
            style={{ width: "150px" }}
            alt="Logo"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contactus" activeStyle>
            Contact Us
          </NavLink>
          {/* <NavLink to="/services" activeStyle>
            Services
          </NavLink> */}
          {/* <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
          {auth.token ? (
            // Display user-specific content if the user is authenticated
            <>
              <NavBtnLink to="/userprofile">
                HI, {auth.user.userName}
              </NavBtnLink>
            </>
          ) : (
            // Display login link if the user is not authenticated
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          )}
          Second Nav
          {/* <NavBtnLink to="/sign-in">Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav1>
      <Nav2>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/jobs" activeStyle>
            Jobs
          </NavLink>
          <NavLink to="/accommodations" activeStyle>
            Accommodations
          </NavLink>
        </NavMenu>
      </Nav2>
    </>
  );
};

export default Navbar;
