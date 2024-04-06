import React from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./modal.css";
import { BsCalendarDate } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EventDetails(props) {
  const [eventDetails, seteventDetails] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    axios

      .get(`http://127.0.0.1:3000/api/events/${props.id}`)
      .then((response) => {
        seteventDetails(response.data);
        console.log(response);
      });
  }, []);

  // console.log("response")
  console.log(eventDetails);

  if (!eventDetails) return null;

  return (
    <div>
      <button onClick={handleOpen}> View Details</button>
      <Modal open={open} onClose={handleClose} id={props.id}>
        <Box sx={style}>
          <div className="parent">
            <div className="div1">
              <img
                src={eventDetails.imageURL}
                alt="myPic"
                className="cards_img"
              />
              <h2
                style={{
                  marginTop: "5px",
                }}
              >
                {eventDetails.eventName}
              </h2>
            </div>
            <div className="div2">
              <div className="date">
                <BsCalendarDate fontSize="large" className="icons" />
                <Typography className="iconDes">
                  {eventDetails.date.split("T")[0]}
                </Typography>
              </div>
              <div className="time">
                <BsClock fontSize="large" className="icons" />
                <Typography className="iconDes">
                  {eventDetails.startTime} - {eventDetails.endTime}
                </Typography>
              </div>
              <div className="cost">
                <BsCoin fontSize="large" className="icons" />
                <Typography className="iconDes">
                  {"$" + eventDetails.cost}
                </Typography>
              </div>
            </div>
            <div className="div4">
              <h4 style={{ paddingLeft: "1rem" }}>About Event</h4>
              <div className="div5">
                <h4 style={{ paddingLeft: "1rem" }}>
                  Organizer: {eventDetails.eventOrganizer}
                </h4>
                <div
                  style={{
                    padding: "1rem",
                  }}
                >
                  {eventDetails.description}
                </div>
              </div>
              <div className="div6">
                <h4 style={{ paddingLeft: "1rem" }}>Location</h4>
                <div className="loc">
                  <b>State: &nbsp; &nbsp; &nbsp;</b>
                  {eventDetails.state}
                </div>
                <div className="loc">
                  <b>City: &nbsp; &nbsp; &nbsp; &nbsp;</b>
                  {eventDetails.city}
                </div>
                <div className="loc">
                  <b>Venue: &nbsp; &nbsp;</b>
                  {eventDetails.venue}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
