import React, { useState } from "react";
import "../../src/_dist/ReportBug.css";

function ReportBug() {
  const [bugType, setBugType] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleBugTypeChange = (e: any) => {
    setBugType(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can implement the logic to submit the bug report
    // For this example, let's just log the values to the console
    console.log("Bug Type:", bugType);
    console.log("Bug Description:", description);
    console.log("Email:", email);
    console.log("Image:", image);

    // Reset form fields
    setBugType("");
    setDescription("");
    setEmail("");
    setImage(null);
  };

  return (
    <div className="report-div">
      <img src="../images/logokwk.svg" alt="Logo KwK" />
      <h2>Report Bug</h2>
      <form onSubmit={handleSubmit}>
        <div className="report-container">
          <div className="container1">
            <label htmlFor="bugType">Bug Type</label>
            <select
              id="bugType"
              value={bugType}
              onChange={handleBugTypeChange}
              required
            >
              <option value="">Select a bug type</option>
              <option value="UI">UI Bug</option>
              <option value="Functionality">Functionality Bug</option>
              <option value="Crash">Crash Bug</option>
              <option value="Other">Other Bug</option>
            </select>
          </div>
          <div className="container2">
            <label htmlFor="description">Bug Description</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div className="container3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="container4">
            <label htmlFor="image">Bug Screenshot</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit">Submit Bug Report</button>
        </div>
      </form>
    </div>
  );
}

export default ReportBug;
