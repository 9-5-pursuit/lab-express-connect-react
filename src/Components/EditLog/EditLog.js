import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditLog() {
  const [findLog, setFindLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
  });

  const [mistakesMade, setMistakesMade] = useState("");

  const { arrayIndex } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${arrayIndex}`);
      setFindLog(result.data);
      setMistakesMade(result.data.mistakesWereMadeToday);
    } catch (error) {
      console.log(error);
    }
  }

  function handleTextChange(e) {
    setFindLog({
      ...findLog,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result = await axios.put(
        `http://localhost:3001/logs/${arrayIndex}/edit`,
        { ...findLog, mistakesWereMadeToday: mistakesMade }
      );
      alert("UPDATED");
      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit Log</h3>
        <br />
        <label>Captain's Name:</label>
        <input
          type="text"
          id="captainName"
          value={findLog.captainName}
          onChange={handleTextChange}
          required
        />
        <br />
        <label>Title:</label>
        <input
          type="text"
          id="title"
          value={findLog.title}
          onChange={handleTextChange}
          required
        />
        <br />
        <label>Post:</label>
        <input
          type="text"
          id="post"
          value={findLog.post}
          onChange={handleTextChange}
          required
        />
        <br />
        <label>Days since last crisis:</label>
        <input
          type="text"
          id="daysSinceLastCrisis"
          value={findLog.daysSinceLastCrisis}
          onChange={handleTextChange}
          required
        />
        <br />
        <label>Mistakes were made today:</label>
        <input
          type="checkbox"
          checked={mistakesMade}
          onChange={() => setMistakesMade(!mistakesMade)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditLog;
