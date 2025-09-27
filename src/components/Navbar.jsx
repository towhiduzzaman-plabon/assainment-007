import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1 font-bold text-xl">CS — Ticket System</div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
        <button className="btn text-white bg-gradient-to-r from-purple-500 to-indigo-500 ml-4"><span>+ </span> New Ticket</button>
      </div>
    </div>
  );
}
