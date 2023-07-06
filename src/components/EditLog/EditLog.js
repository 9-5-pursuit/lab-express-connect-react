import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditLog() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: "",
    daysSinceLastCrisis: "",
  });

  //Fill in fields with log info before editing
  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);
      setLog(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

async function handleOnSubmit(e) {
  e.preventDefault();

  try {
    let result = await axios.put(`http://localhost:3001/logs/${index}`, {
      captainName: log.captainName,
      title: log.title,
      post: log.post,
      mistakesWereMadeToday: isChecked,
      daysSinceLastCrisis: log.daysSinceLastCrisis,
    });
    alert("UPDATED");
    navigate(`/logs/${index}`);
  } catch (e) {
    console.log(e);
  }
}

  
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Edit</label>
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
          onChange={(e) =>
            setLog({
              ...log,
              mistakesWereMadeToday: !log.mistakesWereMadeToday,
            })
          }
        />
        <button>Submit</button>
      </form>
      <div>
        <Link to="/logs">Back</Link>
      </div>
    </div>
  );
}

export default EditLog;
