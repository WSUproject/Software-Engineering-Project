import React from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./AccommodationModal.css";
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";

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

export default function JobDetails(props) {
  const [accommodationDetails, setAccommodationDetails] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    axios

      .get(`http://localhost:8000/accommodations?accommodationID=${props.id}`)
      .then((response) => {
        setAccommodationDetails(response.data);
        console.log(response);
        console.log("Res", response.data);
      });
  }, []);

  console.log("ACC", accommodationDetails);

  if (!accommodationDetails) return null;

  return (
    <div>
      <button onClick={handleOpen}> View Details</button>
      <Modal open={open} onClose={handleClose} id={props.id}>
        <Box sx={style}>
          <div className="parentA">
            <div className="div1A">
              <div className="titleInfo">
                <h3>{accommodationDetails[0].roomType}</h3>
              </div>
              <div className="titleInfo">
                <h3>{"$" + accommodationDetails[0].rent}</h3>
              </div>
              <div className="titleInfo">
                <h3>Move In: {accommodationDetails[0].moveIn}</h3>
              </div>
            </div>
            <div className="div2A">
              <div className="placeInfo">
                <h3>ABS's place</h3>
                <h3 className="titleInfo"> Space</h3>
                <div className="titleDesc">{accommodationDetails[0].space}</div>
                <h3 className="titleInfo"> Amenities</h3>
                <div className="titleDesc">
                  <ul className="lists">
                    {accommodationDetails[0].amenities
                      .split(",")
                      .map((value, index) => {
                        return <li key={index}>{value}</li>;
                      })}
                  </ul>
                </div>

                <h3 className="titleInfo"> Roommate Rules</h3>
                <div className="titleDesc">
                  <ul className="lists">
                    {accommodationDetails[0].roommateRules
                      .split(",")
                      .map((value, index) => {
                        return <li key={index}>{value}</li>;
                      })}
                  </ul>
                </div>
              </div>
              <div className="div4A">
                <h3 className="titleInfo" style={{ marginLeft: "0.5rem" }}>
                  Location
                </h3>
                <div className="loc">
                  <b>State: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</b>
                  {accommodationDetails[0].state}
                </div>
                <div className="loc">
                  <b>City: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</b>
                  {accommodationDetails[0].city}
                </div>
                <div className="loc">
                  <b>Street: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</b>
                  {accommodationDetails[0].street}
                </div>
                <div className="loc" style={{ marginBottom: "0.5rem" }}>
                  <b>House No.: &nbsp;</b>
                  {accommodationDetails[0].houseNumber}
                </div>
              </div>
            </div>

            <div className="div3A">
              <div className="div5A">
                <img src="/pp.jpg" alt="Avatar" class="avatar" />
                <h3 className="Uname">John Doe</h3>
                <div className="uContactInfo">
                  <div className="gg">
                    <FaPhone fontSize="large" />
                    <div>9811434001</div>
                  </div>
                  <div className="gg">
                    <FiMail fontSize="large" />
                    <div>john@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
