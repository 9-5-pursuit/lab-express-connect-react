import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditLog() {
  let navigate = useNavigate();

  const { index } = useParams();

  //   const [logTitle, setLogTitle] = useState("");
  //   const [mistakesMade, setMistakesMade] = useState(false);

  const [logTitle, setLogTitle] = useState("");
  const [capName, setCapName] = useState("");
  const [editPost, setEditPost] = useState("");
  const [days, setDays] = useState("");
  const [mistakesMade, setMistakesMade] = useState(false);

  useEffect(() => {
    handleFetchDataByIndex();
  }, []);

  async function handleFetchDataByIndex() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);

      //   console.log(result.data);

      const {
        title,
        mistakesWereMadeToday,
        post,
        captainName,
        daysSinceLastCrisis,
      } = result.data;

      setLogTitle(title);
      setMistakesMade(mistakesWereMadeToday);
      setCapName(captainName);
      setEditPost(post);
      setDays(daysSinceLastCrisis);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.put(`http://localhost:3001/logs/${index}`, {
        captainName: capName,
        title: logTitle,
        post: editPost,
        mistakesWereMadeToday: mistakesMade,
        daysSinceLastCrisis: days,
      });

      alert("Updated!");

      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {/* <form onSubmit={handleOnSubmit}>
        <label>Log</label>
        <br />
        <input
          value={logTitle}
          type="text"
          onChange={(e) => setLogTitle(e.target.value)}
        />

        <br />
        <label>Mistakes Made?</label>
        <input
          type="checkbox"
          checked={mistakesMade}
          onChange={(e) => setMistakesMade(!mistakesMade)}
        ></input>
        <br /> */}

      <div>
        <h1>Edit</h1>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Captain's Name:</label>
          <br />
          <input
            type="text"
            value={capName}
            onChange={(e) => setCapName(e.target.value)}
          />
        </div>

        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={logTitle}
            onChange={(e) => setLogTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Post:</label>
          <br />
          <input
            type="text"
            value={editPost}
            onChange={(e) => setEditPost(e.target.value)}
          />
        </div>
        <div>
          <label>Days Since Last Crisis:</label>
          <br />
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>
        <div>
          <label>Mistakes were made today:</label>
          <br />

          <input
            type="checkbox"
            checked={mistakesMade}
            onChange={(e) => setMistakesMade(!mistakesMade)}
          ></input>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditLog;
