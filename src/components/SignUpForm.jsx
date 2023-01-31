import React, { useState } from "react";
import Button from "./Button";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Add code to submit the form data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
        <h3>Create your account</h3>
      <input
        type="text"
        placeholder="Name..."
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Email..."
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="Password..."
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
        <Button className='scheduleBtn'><a href='#'>Sign Up</a></Button>
    </form>
  );
};

export default SignUpForm;
