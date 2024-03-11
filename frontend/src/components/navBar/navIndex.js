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

const Navbar = (props) => {
  return (
    <>
      <Nav1>
        <NavLink to="/">
          <img src="#" style={{ width: "150px" }} alt="Logo" />
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
          Second Nav
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
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
