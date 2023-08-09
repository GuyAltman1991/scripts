import React, { useState } from "react";
// import ImageUpload from "../helpers/ImageUpload";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the API endpoint
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("file", formData.file);

    fetch("https://api.example.com/image", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        // Add any additional handling for the API response here
      })
      .catch((error) => {
        console.error("Error sending data to the API:", error);
        // Handle any errors that occur during the API request
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="file">Upload File:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
