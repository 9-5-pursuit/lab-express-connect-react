import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/logs">Captain's Log</Link>
      <Link to="/logs/new">New Log</Link>
    </nav>
  );
}

export default NavBar;
