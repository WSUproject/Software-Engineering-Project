import { useCallback, useState } from "react";
import React from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUploader";
import { uploadToFirebase } from "./UploadFirebase";
import "./FileUploader.css";

const FileUploader = ({ setParentState, applyJob }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [uploadedToCloud, setUploadedToCloud] = useState(false);

  const handleSubmit = async () => {
    if (pdfFile) {
      const downloadURL = await uploadToFirebase(pdfFile);
      console.log("Download URL: " + downloadURL);
      setParentState((prevState) => ({
        ...prevState,
        fileURL: downloadURL,
      }));
      setUploadedToCloud(true);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Only accepting PDF files, no need for a preview
    const file = acceptedFiles[0];
    setPdfFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "application/pdf",
    maxFiles: 1,
  });

  const removeFile = () => {
    setPdfFile(null);
    setParentState((prevState) => ({
      ...prevState,
      fileURL: "",
    }));
    setUploadedToCloud(false);
  };

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a PDF here, or click to select a PDF</p>
      </div>
      {pdfFile && (
        <div className="preview">
          <p>{pdfFile.name}</p>
          <button onClick={removeFile} className="Xbtn">
            Remove
          </button>
        </div>
      )}
      {!uploadedToCloud ? (
        <button onClick={handleSubmit}>Upload</button>
      ) : (
        <></>
      )}
      {uploadedToCloud ? <button onClick={applyJob}>Apply</button> : <></>}
    </div>
  );
};

export default FileUploader;
