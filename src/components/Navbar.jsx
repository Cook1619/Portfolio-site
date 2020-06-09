import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              to="/"
            >
              Mathew Cook
            </Link>
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/projects"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://mcook.io/"
                  target="_blank"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://github.com/Cook1619"
                  target="_blank"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
