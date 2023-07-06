import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/logs"}>Captain's Log</Link>
          </li>
          <li>
            <Link to={"/logs/new"}>New Log</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
