import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewLog() {
  const navigate = useNavigate();

  //   const [isChecked, setIsChecked] = useState(logObj.mistakesWereMadeToday);

  const [logObj, setLogObj] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });

  const [isChecked, setIsChecked] = useState(logObj.mistakesWereMadeToday);

  function handleText(e) {
    setLogObj({ ...logObj, [e.target.id]: e.target.value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    async function newData() {
      try {
        const result = await axios.post(`http://localhost:3001/logs`, logObj);

        setLogObj(result.data);
      } catch (e) {
        console.log(e);
      }
    }

    newData();
    navigate(`/logs`);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="captainName" className="fs-5 fw-medium form-label">
            Captain's Name:
          </label>
          <input
            id="captainName"
            name="captainName"
            type="text"
            className="form-control"
            value={logObj.captainName}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="fs-5 fw-medium form-label">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            value={logObj.title}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post" className="fs-5 fw-medium form-label">
            Post
          </label>
          <textarea
            id="post"
            name="post"
            type="text"
            className="form-control"
            value={logObj.post}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="daysSinceLastCrisis"
            className="fs-5 fw-medium form-label"
          >
            Days Since Last Crisis
          </label>
          <input
            id="daysSinceLastCrisis"
            name="daysSinceLastCrisis"
            type="number"
            className="form-control"
            value={logObj.daysSinceLastCrisis}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <label
              htmlFor="mistakesWereMadeToday"
              className="fs-5 fw-medium form-check-label"
            >
              Mistakes were made today
            </label>
            <input
              id="mistakesWereMadeToday"
              name="mistakesWereMadeToday"
              type="checkbox"
              className="form-check-input"
              checked={logObj.mistakesWereMadeToday}
              onChange={() => {
                setLogObj({
                  ...logObj,
                  mistakesWereMadeToday: setIsChecked(!isChecked),
                });
              }}
            />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default NewLog;
