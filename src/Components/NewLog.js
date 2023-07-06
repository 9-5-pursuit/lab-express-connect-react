import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

function NewLog() {
  const navigate = useNavigate();
  const [capLog, setCapLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.post(`${URL}/logs`, capLog);
      setCapLog(result.data);
      alert("Log Created");
      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  function handleOnChange(e) {
    setCapLog({
      ...capLog,
      [e.target.id]: e.target.value,
    });
  }

  function handleCheckBox() {
    setCapLog({
      ...capLog,
      mistakesWereMadeToday: !capLog.mistakesWereMadeToday,
    });
  }

  return (
    <div className="newLog">
      <h1>New</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          type="text"
          value={capLog.captainName}
          onChange={handleOnChange}
          id="captainName"
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={capLog.title}
          onChange={handleOnChange}
          id="title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          type="text"
          value={capLog.post}
          onChange={handleOnChange}
          id="post"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          value={capLog.daysSinceLastCrisis}
          onChange={handleOnChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          value={capLog.mistakesWereMadeToday}
          onChange={handleCheckBox}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default NewLog;
