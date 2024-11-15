"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-5 text-white bg-blue-800 fixed nav z-10">
      <div>
        <h1 className="text-3xl font-signature ml-2 italic">
          <a className="link-underline hover:decoration-solid" href="#">
            Innovations Portal
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-blue-500 duration-200"
          >
            <Link href={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 transition duration-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link onClick={() => setNav(!nav)} href={`/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
