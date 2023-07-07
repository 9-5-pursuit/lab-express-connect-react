import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LogForm.css";

function LogForm() {
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
    <div className="form-form-container">
      <div>
        <h2>Edit</h2>
      </div>

      <div className="form-container-form">
        <form onSubmit={handleOnSubmit}>
          <div className="edit-container-input">
            <label>Captain's Name</label>
            <input
              type="text"
              value={data.captainName}
              onChange={(e) => {
                setData({ ...data, captainName: e.target.value });
              }}
            />
          </div>

          <div className="form-container-input">
            <label>Title</label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
            />
          </div>

          <div className="form-container-input">
            <label>Post:</label>
            <input
              type="text"
              value={data.post}
              onChange={(e) => {
                setData({ ...data, post: e.target.value });
              }}
            />
          </div>

          <div className="form-container-input">
            <label>Days since last Crisis</label>
            <input
              type="number"
              value={data.daysSinceLastCrisis}
              onChange={(e) => {
                setData({ ...data, daysSinceLastCrisis: e.target.value });
              }}
            />
          </div>

          <div className="form-container-label-checkbox">
            <label>Mistakes were made today:</label>
            <input
              type="checkbox"
              value={data.mistakesWereMadeToday}
              onChange={(e) => {
                setData({
                  ...data,
                  mistakesWereMadeToday: !data.mistakesWereMadeToday,
                });
              }}
            />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LogForm;