import React from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./JobModal.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
  const [jobDetails, setjobDetails] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const refreshPage = () => {
    axios.get(`http://127.0.0.1:3000/api/jobs`).then((response) => {
      props.setjobPost(response.data);
    });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/jobs/${props.id}`);
      handleClose();
      await refreshPage();
      // navigate("/jobs");

      //history.push("/jobs");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // http://localhost:8000/jobs?id=1

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3000/api/jobs/${props.id}`).then((response) => {
      setjobDetails(response.data);
      console.log("Response", response);
    });
  }, []);

  console.log("jobdetails", jobDetails);
  console.log("asdasdasd", props.id);

  // var names = 'Harry,John,Clark,Peter,Rohn,Alice';

  if (!jobDetails) return null;

  return (
    <div>
      <button onClick={handleOpen}> View Details</button>
      <Modal open={open} onClose={handleClose} id={props.id}>
        <Box sx={style}>
          <div class="parents">
            <div class="divbtn">
              {/* <b>button</b> */}
              <Link
                to={"/updateJob/" + props.id}
                style={{ textDecoration: "none" }}
              >
                <button class="editBtn">Edit</button>
              </Link>
              <Link>
                <button class="delBtn" onClick={handleDelete}>
                  Delete
                </button>
              </Link>
            </div>
            <div class="div1j">
              <b>College/Company</b>
            </div>
            <div class="div2j">
              <b>:</b>
            </div>
            <div class="div3j">{jobDetails.institutionName}</div>
            <div class="div4j">
              <b>Post</b>
            </div>
            <div class="div5j">
              <b>:</b>
            </div>
            <div class="div6j"> {jobDetails.post}</div>
            <div class="div7j">
              <b>Job Level</b>
            </div>
            <div class="div8j">
              <b>:</b>
            </div>
            <div class="div9j">{jobDetails.level} </div>
            <div class="div10j">
              <b>Vacancies</b>
            </div>
            <div class="div11j">
              <b>:</b>
            </div>
            <div class="div12j">{jobDetails.vacancy} </div>
            <div class="div13j">
              <b>Employment Type</b>
            </div>
            <div class="div14j">
              <b>:</b>
            </div>
            <div class="div15j"> {jobDetails.type}</div>
            <div class="div16j">
              <b>Salary</b>
            </div>
            <div class="div17j">
              <b>:</b>
            </div>
            <div class="div18j">${jobDetails.salary} </div>
            <div class="div19j">
              <b>Appication Deadline</b>
            </div>
            <div class="div20j">
              <b>:</b>
            </div>
            <div class="div21j">{jobDetails.deadline?.split("T")[0]} </div>
            <div class="div22j">
              <b>Education Level</b>
            </div>
            <div class="div23j">
              <b>:</b>
            </div>
            <div class="div24j">{jobDetails.education} </div>
            <div class="div25j">
              <b>Experience</b>
            </div>
            <div class="div26j">
              <b>:</b>
            </div>
            <div class="div27j">{jobDetails.experience}</div>
          </div>
          <div class="div28j">
            <div>
              <b>Other Specifications</b>
            </div>
            <div>
              <ul className="lists">
                {jobDetails.specifications?.split(",").map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </div>
          </div>
          <div class="div29j">
            <div>
              <b>Job Description</b>
            </div>
            <div>
              <ul className="lists">
                {jobDetails.description?.split(",").map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </div>
            <Link to="/apply" style={{ textDecoration: "none" }}>
              <Button>Apply</Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
