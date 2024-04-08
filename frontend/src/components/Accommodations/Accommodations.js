import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import "./acc.css";
import AccommodationDetails from "./AccommodationDetailsModal";
import { Link } from "react-router-dom";

const baseURL = "http://127.0.0.1:3000/api/accommodations";

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
  //const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const [accommodationPost, setAccommodationPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAccommodationPost(response.data);
    });
  }, []);

  if (!accommodationPost) return null;

  const accommodations = accommodationPost.map((data) => {
    console.log(data.uuid);
    return (
      <div className="card" key={data.accommodationID}>
        <img src={data.imageURL} alt="myPic" className="card_img" />

        <div className="card_info">
          <h2 className="event_name">{data.roomType} </h2>

          <h3 className="event_date">{"$" + data.rent} </h3>
          <h3 className="event_location">{data.location} </h3>
          <div>
            <AccommodationDetails
              id={data.uuid}
              setAccommodationPost={setAccommodationPost}
            />
          </div>
        </div>
      </div>
    );
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
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          //className={classes.button}
          component={Link}
          to="./CreateAccommodationForm"
        >
          Create Accommodation
        </Button>
      </div>
      <div className="cards">{accommodations}</div>
    </>
  );
}
