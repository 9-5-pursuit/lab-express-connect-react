import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateNewLog() {
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });
  const navigate = useNavigate();

  function handleTextChange(e) {
    setNewLog({
      ...newLog,
      [e.target.id]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result = await axios.post(`http://localhost:3001/logs/new`, newLog);
      setNewLog("");
      navigate("/logs");

      console.log(typeof newLog.daysSinceLastCrisis);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Create Log</h3>
        <br />
        <label>Captain's Name:</label>
        <input
          type="text"
          id="captainName"
          value={newLog.captainName}
          onChange={handleTextChange}
          required
        />
        <br />
        <label>Title:</label>
        <input
          type="text"
          id="title"
          value={newLog.title}
          onChange={handleTextChange}
          required
        />
        <br />
        <label>Post:</label>
        <input
          type="text"
          id="post"
          value={newLog.post}
          onChange={handleTextChange}
          required
        />
        <br />
        <label>Days since last crisis:</label>
        <input
          type="text"
          id="daysSinceLastCrisis"
          value={newLog.daysSinceLastCrisis}
          onChange={handleTextChange}
          required
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateNewLog;
