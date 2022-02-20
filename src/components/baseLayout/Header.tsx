import React from "react";
import { Link } from "gatsby";

import logo from "../../images/logo.svg";
import ThemeChanger from "../ThemeChanger";

const Menu = ({ isCompact }) => (
  <ul
    tabIndex={0}
    className={
      isCompact
        ? "mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        : "menu menu-horizontal p-0"
    }
  >
    <li>
      <a>About</a>
    </li>
    <li tabIndex={0} className={isCompact ? "justify-between" : ""}>
      <a>
        Documentation
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <ul className="p-2 bg-neutral">
        <li>
          <a>Submenu 1</a>
        </li>
        <li>
          <a>Submenu 2</a>
        </li>
      </ul>
    </li>
    <li>
      <a>FAQ</a>
    </li>
  </ul>
);

const Header = () => (
  <div className="navbar mb-2 bg-neutral text-neutral-content rounded-box">
    <div className="navbar-start">
      <div className="dropdown">
        <label className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <Menu isCompact={true} />
      </div>
      <Link to="/">
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <span className="text-lg font-bold">ReFees</span>
    </div>
    <div className="navbar-center hidden lg:flex">
      <Menu isCompact={false} />
    </div>
    <div className="navbar-end flex space-x-10">
      <a className="btn btn-primary btn-sm">Launch App</a>
      <ThemeChanger />
    </div>
  </div>
);

export default Header;
