import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  function handleNewLog() {
    navigate("/logs/new");
  }
  return (
    <div className="nav-bar">
      <h2>Captain's Log</h2>
      <button className="newLogButton" onClick={handleNewLog}>
        New Log
      </button>
    </div>
  );
}

export default NavBar;
