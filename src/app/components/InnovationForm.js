"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const InnovationForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: data.name,
      email: data.email,
      description: data.description,
    };

    axios
      .post("http://127.0.0.1:8000/api/innovation", userData)
      .then((response) => {
        console.log(response.statusText);
      });
  };

  return (
    <main className="w-full p-3 bg-white rounded-md shadow-md ">
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-2">
          <label
            htmlFor="Name"
            className="block text-sm font-semibold text-blue-800"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-blue-800"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="Description"
            className="block text-sm font-semibold text-blue-800"
          >
            Description
          </label>
          <textarea
            label="Description"
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Enter your description"
            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-2">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default InnovationForm;
