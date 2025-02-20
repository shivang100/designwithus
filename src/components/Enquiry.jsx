"use client";
import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    mobile: false,
    email: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Perform validation
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile Number is required";

    setErrors(newErrors); // ✅ Set errors inside event handler, not in render

    // If there are no errors, proceed
    if (!Object.values(newErrors).length) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      id="enquiry"
      className="flex justify-center items-center min-h-screen bg-gray-50"
    >
      <Card shadow className="w-full max-w-lg p-6">
        <Typography variant="h4" color="blue" className="text-center mb-4">
          Enquiry Form
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            label="Mobile Number *"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />
          <Input
            label="Email *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Textarea
            label="Comment or Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            className=" my-2  hover:bg-yl bg-orange-400"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
