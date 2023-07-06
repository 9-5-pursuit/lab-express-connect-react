import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateLog() {
  let navigate = useNavigate();

  const [newTitle, setNewTitle] = useState("");
  const [capName, setCapName] = useState("");
  const [newPost, setNewPost] = useState("");
  const [days, setDays] = useState("");
  const [mistakesMade, setMistakesMade] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.post(`http://localhost:3001/logs/`, {
        captainName: capName,
        title: newTitle,
        post: newPost,
        daysSinceLastCrisis: Number(days),
        mistakesWereMadeToday: mistakesMade,
      });

      console.log(result);
      setNewTitle("");
      setCapName("");
      setNewPost("");
      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mx-3">
      <div>
        <h1>New</h1>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Captain's Name:</label>
          <br />
          <input
            type="text"
            value={capName}
            onChange={(e) => setCapName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Post:</label>
          <br />
          <input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Days Since Last Crisis:</label>
          <br />
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mistakes were made today:</label>
          <br />
          <input
            type="checkbox"
            value={mistakesMade}
            onChange={(e) => setMistakesMade(!mistakesMade)}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateLog;
