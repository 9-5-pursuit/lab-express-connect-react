import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

function EditLog() {
  const { index } = useParams();
  const [updateLog, setUpdateLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();

  function handleOnChange(e) {
    setUpdateLog({
      ...updateLog,
      [e.target.id]: e.target.value,
    });
  }

  function handleOnCheck() {
    setUpdateLog({
      ...updateLog,
      mistakesWereMadeToday: !updateLog.mistakesWereMadeToday,
    });
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.put(`${URL}/logs/${index}`);
      setUpdateLog(result.data);
      navigate(`/logs/${index}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="editLog">
      <h1>Edit</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="captainsName">Captain's Name:</label>
        <input
          type="text"
          value={updateLog.captainName}
          onChange={handleOnChange}
          id="captainName"
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={updateLog.title}
          onChange={handleOnChange}
          id="title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          type="text"
          value={updateLog.post}
          onChange={handleOnChange}
          id="post"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          value={updateLog.daysSinceLastCrisis}
          onChange={handleOnChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          value={updateLog.mistakesWereMadeToday}
          onChange={handleOnCheck}
        />
        <input type="submit"></input>
      </form>
      <Link to={"/logs"}>Back</Link>
    </div>
  );
}

export default EditLog;
