import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "rgb(32, 7, 77)" }}>
        <div className="container-fluid">
          <header>
            <NavLink
              to="/logs"
              class="navbar-brand"
              style={{
                textDecoration: "none",
                color: "rgb(205, 199, 214)",
                fontWeight: "bold",
                fontSize: 50,
              }}
            >
              Captain's Log
            </NavLink>
          </header>

          <NavLink
            to="/logs/new"
            className="btn-primary"
            style={{ textDecoration: "none" }}
          >
            <button
              className="btn"
              style={{
                backgroundColor: "rgb(205, 199, 214)",
                border: "none",
                borderRadius: "5px",
                fontSize: "25px",

                // background: "none",
                // padding: "0",
                // fontSize: "inherit",

                // color: "white",
              }}
            >
              New Log
            </button>
          </NavLink>
        </div>
      </nav>
      {/* <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> */}
    </>
  );
}

export default Nav;
