import React from 'react';
 import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" ">
        <Link to="/">
  <img className="w-7 h-7 mr-1" src={logo} alt="Logo" />
</Link>

      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
         <NavLink to='/'>Home</NavLink>
      </li>
      <li>
         <NavLink to='/allapps'>Apps</NavLink>
      </li>
      <li>
         <NavLink to='/installation'>Installation</NavLink>
      </li>
   
      </ul>
    </div>
    <a className=" text-xl font-semibold">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         <li>
         <NavLink to='/'>Home</NavLink>
      </li>
      <li>
         <NavLink to='/allapps'>Apps</NavLink>
      </li>
      <li>
         <NavLink to='/installation'>Installation</NavLink>
      </li>
    </ul>
  </div>
        <div className="navbar-end">
       
        <a
  href="https://github.com/Saiful-104"
  target="_blank"
  rel="noopener noreferrer"
  className="btn flex items-center gap-2 bg-gradient-to-r from-purple-800 to-purple-500 text-white hover:from-pink-500 hover:to-yellow-500"
>
  <FaGithub className="text-white" />
    Contribute
</a>

      </div>
</div>
    );
};

export default Nav;