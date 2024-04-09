import React, { useState, useEffect } from "react";
import "./ViewApplication.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

const ViewApplication = () => {
  const axios = useAxiosPrivate();
  const [applicationData, setApplicationData] = useState([]);
  const [pdfDisplay, setPdfDisplay] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/jobApplications/job/${id}`
      );
      setApplicationData(response.data);
      setPdfDisplay(new Array(response.data.length).fill(0));
      console.log(response.data);
    };

    loadData();
  }, []);

  const togglePDFDisplay = (index) => {
    // Create a new array with all current values
    const newPdfDisplay = [...pdfDisplay];
    // Toggle the value at the specified index
    newPdfDisplay[index] = !newPdfDisplay[index];
    // Update the state with the new array
    setPdfDisplay(newPdfDisplay);
  };

  return (
    <div id="GG">
      <h2>Application List</h2>
      <table id="applicants">
        <thead>
          <tr>
            <th>Document</th>
            <th>Date Applied</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applicationData.map((app, index) => (
            <tr key={index}>
              <td>{`Application ${index + 1}`}</td>
              <td>{app.createdAt.split("T")[0]}</td>
              <td>
                {pdfDisplay[index] ? (
                  <div>
                    <iframe
                      src={app.fileURL}
                      width="100%"
                      height="600px"
                      style={{ border: "none" }}
                    ></iframe>
                    <button onClick={() => togglePDFDisplay(index)}>
                      Hide
                    </button>
                  </div>
                ) : (
                  <button onClick={() => togglePDFDisplay(index)}>Show</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplication;
