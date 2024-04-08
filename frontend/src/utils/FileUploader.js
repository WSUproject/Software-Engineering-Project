import { useCallback, useState } from "react";
import React from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUploader";
import { uploadToFirebase } from "./UploadFirebase";

const FileUploader = ({ setParentState }) => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async () => {
    if (pdfFile) {
      const downloadURL = await uploadToFirebase(pdfFile);
      console.log("Download URL: " + downloadURL);
      setParentState((prevState) => ({
        ...prevState,
        fileURL: downloadURL,
      }));
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
          <button onClick={removeFile} className="remove-button">
            Remove
          </button>
        </div>
      )}
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUploader;
