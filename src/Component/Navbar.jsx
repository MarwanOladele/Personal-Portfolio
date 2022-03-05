import React from "react";
import { NavLink } from "react-router-dom";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import {
  AiFillProject,
  AiFillContacts,
  AiFillInfoCircle,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <section className="nav">
        <NavLink to="./" className="logo">
          M
        </NavLink>
        <ul>
          <li>
            <NavLink className="underline" to="./">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="underline" to="./about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="underline" to="./project">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink className="underline" to="./contact">
              Contact
            </NavLink>
          </li>
          <div className="connect">
            <a
              href="https://github.com/MarwanOladele"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/marwan-oladele-4aa07316b/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon" />
            </a>
            <a
              href="https://www.twitter.com/officialoladele"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="icon" />
            </a>
          </div>
        </ul>
      </section>
      <section className="responsive">
        <NavLink to="./" className="logo">
          M
        </NavLink>
        <ul className="responsive-nav">
          <div className="items">
            <li>
              <NavLink className="underline" to="./">
                <FaHome />
              </NavLink>
            </li>
            <p>Home</p>
          </div>
          <div className="items">
            <li>
              <NavLink className="underline" to="./about">
                <AiFillInfoCircle />
              </NavLink>
            </li>
            <p>About</p>
          </div>
          <div className="items">
            <li>
              <NavLink className="underline" to="./project">
                <AiFillProject />
              </NavLink>
            </li>
            <p>Project</p>
          </div>
          <div className="items">
            <li>
              <NavLink className="underline" to="./contact">
                <AiFillContacts />
              </NavLink>
            </li>
            <p>Contact</p>
          </div>
          <div className="connect">
            <a
              href="https://github.com/MarwanOladele"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/marwan-oladele-4aa07316b/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon" />
            </a>
            <a
              href="https://www.twitter.com/officialoladele"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="icon" />
            </a>
          </div>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
