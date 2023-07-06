import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">
            <h1 className="nav-captain">Captain's Log</h1>
          </Link>
        </li>
        <li>
          <Link to="/logs/new">New Log</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
