import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateLog() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    //console.log(log);

    try {
      await axios.post(`http://localhost:3001/logs`, log);
      alert(`New Log Created`);
      navigate(`/logs`);
    } catch (error) {
      console.log(error);
    }
    setLog({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: 0,
    });
  }

  function handleOnChange(id, value) {
    setLog({ ...log, [id]: value });
  }

  return (
    <div className="container-md">
      <h1>New</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Captain's Name:</label>
          <input
            required
            type="text"
            id={"captainName"}
            className="form-control"
            onChange={(e) => {
              handleOnChange(e.target.id, e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            id={"title"}
            className="form-control"
            required
            onChange={(e) => {
              handleOnChange(e.target.id, e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Post:</label>
          <textarea
            required
            type="text"
            className="form-control"
            id={"post"}
            placeholder="What happened today?"
            onChange={(e) => {
              handleOnChange(e.target.id, e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Days Since Last Crisis</label>
          <input
            required
            type="number"
            className="form-control"
            placeholder="0"
            id={"daysSinceLastCrisis"}
            onChange={(e) => {
              handleOnChange(e.target.id, e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={"mistakesWereMadeToday"}
            onChange={(e) => {
              //console.log(e.target.checked);
              handleOnChange(e.target.id, e.target.checked);
            }}
          />
          <label className="form-check-label">Mistakes were made today:</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateLog;
