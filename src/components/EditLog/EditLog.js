import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function EditLog() {
  const { index } = useParams();
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

  async function fetchData() {
    try {
      const result = await axios.get(`http://localhost:3001/logs/${index}`);
      setLogObj(result.data);
      //   console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [index]);

  function handleText(e) {
    setLogObj({ ...logObj, [e.target.id]: e.target.value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    async function updateData() {
      try {
        const result = await axios.put(
          `http://localhost:3001/logs/${index}`,
          logObj
        );

        setLogObj(result.data);
        navigate(`/logs/${index}`);
      } catch (e) {
        console.log(e);
      }
    }

    updateData();
    // navigate(`/logs/${index}`);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center">Edit</h1>
      <form onSubmit={handleOnSubmit} className="w-50">
        <div className="mb-3">
          <label className="fs-5 fw-medium form-label" htmlFor="captainName">
            Captain's Name:
          </label>
          <input
            className="form-control"
            id="captainName"
            name="captainName"
            type="text"
            value={logObj.captainName}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <label className="fs-5 fw-medium form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            name="title"
            type="text"
            value={logObj.title}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <label className="fs-5 fw-medium form-label" htmlFor="post">
            Post
          </label>
          <textarea
            className="form-control"
            id="post"
            name="post"
            type="text"
            value={logObj.post}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <label
            className="fs-5 fw-medium form-label"
            htmlFor="daysSinceLastCrisis"
          >
            Days Since Last Crisis
          </label>
          <input
            className="form-control"
            id="daysSinceLastCrisis"
            name="daysSinceLastCrisis"
            type="number"
            value={logObj.daysSinceLastCrisis}
            onChange={handleText}
          />
        </div>
        <div className="mb-3">
          <div className="fs-5 fw-medium form-check">
            <input
              className="form-check-input"
              id="mistakesWereMadeToday"
              name="mistakesWereMadeToday"
              type="checkbox"
              checked={logObj.mistakesWereMadeToday}
              onChange={() => {
                setLogObj({
                  ...logObj,
                  mistakesWereMadeToday: setIsChecked(!isChecked),
                });
              }}
            />
            <label className="form-check-label" htmlFor="mistakesWereMadeToday">
              Mistakes were made today
            </label>
          </div>
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
      <br />
      <Link to="/logs">
        <button className="btn btn-secondary">Back</button>
      </Link>
    </div>
  );
}

export default EditLog;
