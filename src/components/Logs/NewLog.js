import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewLog() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    captainName: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
    post: "",
    title: "",
  });

  async function handleOnSubmit(event) {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:3001/logs`, {
        ...data,
      });

      alert("Success");
      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container my-5">
      <div>
        <h2>New</h2>
      </div>

      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label className="form-label">Captain's Name</label>
            <input
              type="text"
              className="form-control"
              value={data.captainName}
              onChange={(e) => {
                setData({ ...data, captainName: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={data.title}
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Post:</label>
            <input
              type="text"
              className="form-control"
              value={data.post}
              onChange={(e) => {
                setData({ ...data, post: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Days since last Crisis</label>
            <input
              type="number"
              className="form-control"
              value={data.daysSinceLastCrisis}
              onChange={(e) => {
                setData({ ...data, daysSinceLastCrisis: e.target.value });
              }}
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={data.mistakesWereMadeToday}
              onChange={(e) => {
                setData({
                  ...data,
                  mistakesWereMadeToday: e.target.checked,
                });
              }}
            />
            <label className="form-check-label">Mistakes were made today</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewLog;
