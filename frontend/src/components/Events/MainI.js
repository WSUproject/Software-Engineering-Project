import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
// import Card from "./event"
// import EventData from "./data";
import "./event.css";
import EventDetails from "./eventDetailsModal";

import { Link } from "react-router-dom";

const baseURL = "http://127.0.0.1:3000/api/events/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Ncard() {
  // const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [eventpost, seteventPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      seteventPost(response.data);
      // console.log(response)
    });
  }, []);

  // console.log("response")
  // console.log(eventpost)

  if (!eventpost) return null;

  const events = eventpost.map((data) => {
    console.log("----------------------------");
    console.log(data.uuid);
    return (
      <div className="card" key={data.eventID}>
        <img src={data.imageURL} alt="myPic" className="card_img" />

        <div className="card_info">
          <h2 className="event_name">{data.eventName} </h2>

          <h3 className="event_date">{data.date.split("T")[0]} </h3>
          <h3 className="event_location">{data.venue} </h3>

          <div>
            {/* <button onClick={handleOpen}> View Details</button> */}
            <EventDetails id={data.uuid} seteventPost={seteventPost} />
          </div>
          {/* </a> */}
        </div>
      </div>
    );

    {
      /* </div> */
    }
  });

  return (
    <>
      <div className="topev">
        {/* <Box sx={{ minWidth: 200 }} className="selectCategory">
          <FormControl fullWidth>
            <InputLabel id="select-label">Category</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={age}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
        <Button
          // className="Createbtn"
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          // className="btnSubmit"
          // className={classes.button}
          component={Link}
          to="./CreateEventForm"
        >
          Create Event
        </Button>
      </div>
      <div className="cards">{events}</div>
    </>
  );
}
