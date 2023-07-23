import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="m-2 ">Captain's Log</h1>

        <ul className="list-unstyled d-flex">
          <li className="m-3 ">
            <NavLink to="/logs" className="navlink text-decoration-none">
              Logs
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink to="/logs/new" className="text-decoration-none">
              New Log
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
