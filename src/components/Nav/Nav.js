import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar navbar-expand-lg bg-primary-subtle">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <div className="nav-item">
              <NavLink className="nav-link" to="/logs">
                <span className="fs-2 fw-semibold">Captain's Log</span>
              </NavLink>
            </div>
          </div>
          <div className="navbar-nav ms-auto me-0">
            <div className="nav-item">
              <NavLink className="nav-link" to="/logs/new">
                <button className="button mt-2 btn btn-outline-dark btn-lg">
                  New Log
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
