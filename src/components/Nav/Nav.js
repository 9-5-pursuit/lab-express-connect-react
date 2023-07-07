import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li className="left">
            <Link to="/logs">Captain's Log</Link>
          </li>
          <li className="right">
            <Link to="/logs/new">New Log</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;