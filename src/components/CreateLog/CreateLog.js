import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateLog() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: "",
    daysSinceLastCrisis: "",
  });

  async function handleOnSubmit(e) {
    e.preventDefault();
    //when a user submits
    //it make a post request to the server with the captured data
    //use useNavigate hook to navigate back to the home page
    //you should see the newly created log

    try {
      await axios.post(`http://localhost:3001/logs`, {
        captainName: log.captainName,
        title: log.title,
        post: log.post,
        mistakesWereMadeToday: isChecked,
        daysSinceLastCrisis: log.daysSinceLastCrisis,
      });
      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>New</label>
      <br />
      <label htmlFor="captainName">Captain's Name:</label>
      <input
        type="text"
        id="captainName"
        value={log.captainName}
        onChange={(e) => setLog({ ...log, captainName: e.target.value })}
        required
      />
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={log.title}
        onChange={(e) => setLog({ ...log, title: e.target.value })}
        required
      />
      <label htmlFor="post">Post:</label>
      <textarea
        id="post"
        value={log.post}
        onChange={(e) => setLog({ ...log, post: e.target.value })}
        required
      />
      <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
      <input
        type="number"
        id="daysSinceLastCrisis"
        value={log.daysSinceLastCrisis}
        onChange={(e) =>
          setLog({ ...log, daysSinceLastCrisis: e.target.value })
        }
        required
      />
      <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
      <input
        type="checkbox"
        id="mistakesWereMadeToday"
        checked={isChecked}
        onChange={(e) => setIsChecked(!isChecked)}
      />
      <button>Submit</button>
    </form>
  );
}

export default CreateLog;
