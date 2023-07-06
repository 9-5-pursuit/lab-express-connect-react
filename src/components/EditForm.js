import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function EditForm() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);
      console.log(result);
      console.log(result.data);
      const {
        captainName,
        title,
        post,
        daysSinceLastCrisis,
        mistakesWereMadeToday,
      } = result.data;

      setLog({
        captainName,
        title,
        post,
        daysSinceLastCrisis,
        mistakesWereMadeToday,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleTextChange(event) {
    setLog({ ...log, [event.target.id]: event.target.value });
  }

  async function handleCheckedChange() {
    setLog({
      ...log,
      mistakesWereMadeToday: !log.mistakesWereMadeToday,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let result = await axios.put(`http://localhost:3001/logs/${index}`, {
        captainName: log.captainName,
        title: log.title,
        post: log.post,
        daysSinceLastCrisis: log.daysSinceLastCrisis,
        mistakesWereMadeToday: log.mistakesWereMadeToday,
      });

      const {
        captainName: newCaptainName,
        title: newTitle,
        post: newPost,
        daysSinceLastCrisis: newDaysSinceLastCrisis,
        mistakesWereMadeToday: newMistakesWereMadeToday,
      } = result.data;

      alert("Updated log!");

      navigate(`/logs/${index}`);

      setLog({
        captainName: newCaptainName,
        title: newTitle,
        post: newPost,
        daysSinceLastCrisis: newDaysSinceLastCrisis,
        mistakesWereMadeToday: newMistakesWereMadeToday,
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
          onChange={handleTextChange}
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
        <Link to="/logs">
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default EditForm;
