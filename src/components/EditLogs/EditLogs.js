import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditLogs() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [selectLog, setSelectLog] = useState("");
  const [captainName, setCaptainName] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState(0);
  const [mistakes, setMistakes] = useState(false);

  //put request

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${id}`);
      //console.log(result.data);
      const { captainName, title, daysSinceLastCrisis, mistakesWereMadeToday } =
        result.data;

      setCaptainName(captainName);
      setTitle(title);
      setDaysSinceLastCrisis(daysSinceLastCrisis);
      setMistakes(mistakesWereMadeToday);

      //setSelectLog(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //await axios.put()
      let result = await axios.put(`http://localhost:3001/logs/${id}`, {
        captainName: captainName,
        title: title,
        post: post,
        mistakesWereMadeToday: mistakes,
        daysSinceLastCrisis: daysSinceLastCrisis,
      });
      alert("Successfully Updated");
      //console.log(result.data);
      const selectLog = result.data[id];
      const {
        newCaptainName,
        newTitle,
        newDaysSinceLastCrisis,
        newMistakesWereMadeToday,
      } = selectLog;

      setCaptainName(newCaptainName);
      setTitle(newTitle);
      setDaysSinceLastCrisis(newDaysSinceLastCrisis);
      setMistakes(newMistakesWereMadeToday);
      navigate(`/logs`);
      //should get back the whole array
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container-md">
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Captain's Name:</label>
          <input
            type="text"
            className="form-control"
            id="captainName"
            value={captainName}
            required
            onChange={(e) => setCaptainName(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Post:</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="What happened today?"
            id="post"
            value={post}
            required
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Days Since Last Crisis</label>
          <input
            type="number"
            className="form-control"
            placeholder="0"
            id="daysSinceLastCrisis"
            value={daysSinceLastCrisis}
            onChange={(e) => setDaysSinceLastCrisis(e.target.value)}
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="mistakesWereMadeToday"
            checked={mistakes}
            onChange={(e) => setMistakes(!mistakes)}
          ></input>
          <label className="form-check-label">Mistakes were made today:</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <br />
      <button className="btn btn-primary" onClick={() => navigate("/logs")}>
        back
      </button>
    </div>
  );
}

export default EditLogs;
