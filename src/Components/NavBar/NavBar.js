import React from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();

  function handleNewLog() {
    navigate("/logs/new");
  }
  return (
    <>
      <h2>Captain's Log</h2>
      <button onClick={handleNewLog}>New Log</button>
    </>
  );
}

export default NavBar;
