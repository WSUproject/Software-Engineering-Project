import React from "react";
import axios from "axios";
import "./Jobs.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import JobDetails from "./JobDetailsModal";
import { Link } from "react-router-dom";

const baseURL = "http://127.0.0.1:3000/api/jobs";

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

export default function JobCard() {
  const [age, setAge] = React.useState("");

  const handleChange = (job) => {
    setAge(job.target.value);
  };

  const [jobpost, setjobPost] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setjobPost(response.data);
      // console.log(response)
    });
  }, []);

  if (!jobpost) return null;

  const jobs = jobpost.map((data) => {
    return (
      <div key={data.uuid}>
        <div className="jobCard">
          <img src={data.jobBanner} alt="myPic" className="jobCard_img" />

          <div className="jobCard_info">
            <h2 className="job_title">{data.post}</h2>

            <h3 className="job_type">{data.type} </h3>
            <h3 className="vacancy">Vacancy: {data.vacancy} </h3>
            <h3 className="company">{data.institution_name} </h3>

            <div>
              {/* <button onClick={handleOpen}> View Details</button> */}
              <JobDetails id={data.uuid} />
            </div>
          </div>
        </div>
      </div>
    );

    {
      /* </div> */
    }
  });

  return (
    <>
      <div className="top">
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
          to="./CreateJobForm"
        >
          Create Vacancy
        </Button>
      </div>
      <div className="jobCards">{jobs}</div>
    </>
  );
}
