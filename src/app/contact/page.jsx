"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/design1.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Address & Map */}
        <div className="text-white space-y-4">
          <Typography variant="h4" className="font-bold">
            Get In Touch
          </Typography>
          <p>
            Backside Subhash Sales Corporation Godown, Mohammadi Road, Sallia,
            Shahjahanpur - 242306
          </p>
          <p>📞 +91 7007767001</p>
          <p>✉️ kirtiironsteelworks@gmail.com</p>
          <Typography variant="h5" className="font-bold mt-6">
            Find Us
          </Typography>
          <iframe
            className="w-full h-60 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28173.44198045772!2d79.9534!3d27.8801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUyJzQ4LjQiTiA3OcKwNTcnMDEuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Side: Contact Form */}
        <Card className="bg-black bg-opacity-70 text-white p-6">
          <CardBody>
            <Typography variant="h4" className="text-center text-white mb-4">
              Send us a message
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                color="white"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                color="white"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                color="white"
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <div className="relative">
                <textarea
                  className="peer cursor-pointer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-white"
                  placeholder=" "
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:border-white after:border-white peer-focus:after:border-white">
                  Message <span className="text-red-500">*</span>
                </label>
              </div>

              <Button type="submit" color="blue" className="w-full ">
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
