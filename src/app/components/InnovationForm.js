"use client";
import { useState } from "react";
import axios from "axios";

const InnovationForm = () => {
  const [resMsg, setMsg] = useState("");
  const [erroMsg, setErroMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErroMsg("");
    setMsg("");

    if (!data.name || !data.email || !data.description) {
      setErroMsg("Please fill in all fields to continue");
      return;
    }

    if (!validateEmail(data.email)) {
      setErroMsg("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    const userData = {
      name: data.name,
      email: data.email,
      description: data.description,
    };

    axios
      .post("http://127.0.0.1:8000/api/innovation", userData)
      .then((response) => {
        setMsg(response.data.response);
        setData({
          name: "",
          email: "",
          description: "",
        });
      })
      .catch((error) => {
        setErroMsg("An error occurred while submitting. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="w-full m-4 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p className="text-gray-600">
        You got an innovative idea, please share with us below...
      </p>
      {resMsg && <h1 className="text-center text-lime-600 italic">{resMsg}</h1>}
      {erroMsg && <h1 className="text-center text-red-600 italic">{erroMsg}</h1>}

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
            Innovative Idea
          </label>
          <textarea
            label="Innovative Idea"
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Enter your Innovative Idea here"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 text-1xl "
          />
        </div>

        <div className="mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default InnovationForm;
