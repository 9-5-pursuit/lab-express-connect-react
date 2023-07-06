import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <h1>Captain's Log</h1>

        <Link to="/logs">Logs</Link>

        <button>
          <Link to="/logs/new">New Log</Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
