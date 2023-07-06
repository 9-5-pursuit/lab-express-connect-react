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
        <label htmlFor="captainName">
          <span>Captain's Name: </span>
        </label>
        <input
          type="text"
          value={capLog.captainName}
          onChange={handleOnChange}
          id="captainName"
        />
        <br />
        <br />
        <label htmlFor="title">
          <span>Title: </span>
        </label>
        <input
          type="text"
          value={capLog.title}
          onChange={handleOnChange}
          id="title"
        />
        <br />
        <br />
        <label htmlFor="post">
          <span>Post: </span>
        </label>
        <textarea
          type="text"
          value={capLog.post}
          onChange={handleOnChange}
          id="post"
        />
        <br />
        <br />
        <label htmlFor="daysSinceLastCrisis">
          <span>Days Since Last Crisis: </span>
        </label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          value={capLog.daysSinceLastCrisis}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label htmlFor="mistakesWereMadeToday">
          <span>Mistakes were made today: </span>
        </label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          value={capLog.mistakesWereMadeToday}
          onChange={handleCheckBox}
        />
        <br />
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default NewLog;
