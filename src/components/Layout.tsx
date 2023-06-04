import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import Footer from './Footer'

const Layout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <div>
      <div className="flex items-center justify-between lg:mx-auto p-7">
        <NavLink to="/" className="text-white font-bold text-3xl">
          GPT-4
        </NavLink>

        <div
          className={`${
            open ? 'flex justify-end' : 'hidden'
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <div className="nav-items text-sm lg:text-base text-white lg:mx-3">
            <NavLink
              to="/"
              className="block lg:inline-block text-white lg:hover:text-gray-500 px-4 py-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block lg:inline-block text-white lg:hover:text-gray-500 px-4 py-2"
            >
              What is GPT?
            </NavLink>
            <NavLink
              to="/open-ai"
              className="block lg:inline-block text-white lg:hover:text-gray-500 px-4 py-2"
            >
              Open AI
            </NavLink>
            <NavLink
              to="/case-studies"
              className="block lg:inline-block text-white lg:hover:text-gray-500 px-4 py-2"
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/library"
              className="block lg:inline-block text-white lg:hover:text-gray-500 px-4 py-2"
            >
              Library
            </NavLink>
          </div>
          <div className="flex flex-col lg:block">
            <NavLink
              to="/login"
              className="text-white text-sm lg:text-lg mx-4"
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="text-white text-sm my-2 lg:text-lg lg:my-0 bg-red-500 lg:w-[170px] lg:h-[58px] p-2 rounded-md"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        <div className="lg:hidden mx-4 h-6 w-6 cursor-pointer" onClick={toggleMenu}>
            <Hamburger color="white" />
        </div>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

