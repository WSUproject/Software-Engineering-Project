import React, { useEffect } from "react";
import "./profile.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");

  const [userPosts, setUserPosts] = React.useState("");

  const handleChange = (event) => {
    setUserPosts(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((response) => {
      setUser(response.data[0].firstName);
      setEmail(response.data[0].email);
      setContact(response.data[0].primaryPhone);
      setCity(response.data[0].city);
      setState(response.data[0].state);
      console.log(response);
      console.log("aaaa", response.data[0].userID);
    });
  }, []);

  function MyCondition(props) {
    const choseValue = props.type;
    if (choseValue == "Events") {
      return (
        <div>
          <h1>Event</h1>
        </div>
      );
      // return <UserEventPosts />;
    } else if (choseValue == "Jobs") {
      return (
        <div>
          <h1>job</h1>
        </div>
      );
      // return <UserJobPosts />;
    } else if (choseValue == "Accommodations") {
      return (
        <div>
          <h1>acc</h1>
        </div>
      );
      // return <UserAccommodationPosts />;
    } else if (choseValue == "" || choseValue == null) {
      return <p>Choose Category</p>;
    }
  }

  return (
    <>
      <div className="btnEdit">
        <button class="button button2">Logout</button>
      </div>

      <div class="userProfileParent">
        <div class="div1u">
          <div className="profileCard">
            <img src="/pp.jpg" alt="profilePic" className="profilePic" />
          </div>
        </div>
        <div class="div2u">
          <div className="UPDesc">
            <h3>Name: {user}</h3>
          </div>
          <div className="UPDesc">
            <h3>Email: {email}</h3>
          </div>
          <div className="UPDesc">
            <h3>Contact: {contact}</h3>
          </div>
          <div className="UPDesc">
            <h3>
              Address: {city}, {state}
            </h3>
          </div>
        </div>
        <div class="div3u">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Your Posts</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                defaultValue={"Events"}
                id="demo-simple-select"
                value={userPosts}
                label="Your Posts"
                onChange={handleChange}
              >
                <MenuItem value={"Events"}>Events</MenuItem>
                <MenuItem value={"Jobs"}>Jobs</MenuItem>
                <MenuItem value={"Accommodations"}>Accommodation</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="userPosts">
          {/* <Home /> */}
          {/* <MainI /> */}

          <MyCondition type={userPosts} />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
