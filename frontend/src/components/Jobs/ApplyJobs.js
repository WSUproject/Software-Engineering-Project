import React, { useState, useEffect } from "react";
import "../AccomodationPost/AccomodationForm.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useParams } from "react-router-dom";
import FileUploader from "../../utils/FileUploader";
import "./ApplyJob.css";

const ApplyJobs = () => {
  const [applyData, setApplyData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const axios = useAxiosPrivate();
  useEffect(() => {
    setApplyData({ job_uuid: id });
  }, []);

  const handleApply = async () => {
    const data = await axios.post(
      "http://127.0.0.1:3000/api/jobApplications",
      applyData
    );
    navigate("/jobs");
  };

  //   const [formData, setFormData] = useState({
  //     roomType: "",
  //     rent: "",
  //     moveIn: "",
  //     space: "",
  //     amenities: "",
  //     rules: "",
  //     location: "",
  //     imageURL: "image",
  //   });

  //   const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevState) => ({ ...prevState, [name]: value }));
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     // Process the data
  //     console.log(formData);
  //     // Here you would usually send the data to the server

  //     await axios.post("http://127.0.0.1:3000/api/accommodations", formData).then(
  //       (response) => {
  //         console.log(response);
  //         navigate("/accommodations");
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   };

  return (
    <div className="apply1">
      <h2>Apply for Job</h2>
      <FileUploader
        setParentState={setApplyData}
        applyJob={handleApply}
      ></FileUploader>
    </div>
  );
};

export default ApplyJobs;
