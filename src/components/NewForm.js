import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewForm() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });

  function handleTextChange(event) {
    setLog({ ...log, [event.target.id]: event.target.value });
  }

  function handleCheckedChange(event) {
    setLog({
      ...log,
      mistakesWereMadeToday: event.target.checked,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/logs", log);
      console.log(result.data);

      navigate("/logs");

      setLog({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: "",
        mistakesWereMadeToday: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <br />
        <input
          type="text"
          id="captainName"
          name="captainName"
          value={log.captainName}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={log.title}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="post">Post:</label>
        <br />
        <textarea
          type="text"
          id="post"
          name="post"
          value={log.post}
          placeholder="What happened today?"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <br />
        <input
          type="number"
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
        />
        <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <br />
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          checked={log.mistakesWereMadeToday}
          onChange={handleCheckedChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewForm;
