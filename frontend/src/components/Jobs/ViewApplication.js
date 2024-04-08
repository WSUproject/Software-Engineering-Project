import React, { useState, useEffect } from "react";
import "./ViewApplication.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

const ViewApplication = () => {
  const axios = useAxiosPrivate();
  const [applicationData, setApplicationData] = useState([]);
  const [one, setOne] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Assuming fetchData is an async function that fetches data
    const loadData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/jobApplications/job/${id}`
      );
      setOne(response.data); // Assuming setState is your state setter function
      console.log("test");
    };

    loadData();
    console.log(one);
  }, []); // Empty dependency array to run once on mount

  return (
    <div id="GG">
      <h2>Application List</h2>
      <table id="applicants">
        <tr>
          <th>Applicants</th>
          <th>Document</th>
          <th>Date Applied</th>
        </tr>
        {/* {applicationData.map((app, index) => (
            <tr key={index}>
              <td>{app.applicantName}</td>
              <td>{app.document}</td>
              <td>{app.dateApplied}</td>
            </tr>
          ))} */}
        <tr>
          <td>UserName</td>
          <td>Application 1</td>
          <td>ugjhj</td>
        </tr>
      </table>
    </div>
  );
};

export default ViewApplication;
