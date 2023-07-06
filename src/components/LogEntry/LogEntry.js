import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function LogEntry() {
  const { index } = useParams();

  let navigate = useNavigate();

  const [logArray, setLogArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);
      // console.log(result);

      setLogArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDeleteByIndex(index) {
    try {
      let result = await axios.delete(`http://localhost:3001/logs/${index}`);

      setLogArray(result.data);

      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  function handleEdit(index) {
    navigate(`/${index}/edit`);
  }

  return (
    <div>
      <div>
        <h1>Show</h1>
      </div>
      <div className="card mb-3 container">
        <div className="card-body">
          <h2 className="card-title">{logArray.title}</h2>
          <h5>{logArray.post}</h5>
          <p className="card-text">
            <small>
              <strong>Days since last crisis: </strong>
              {logArray.daysSinceLastCrisis}
            </small>
          </p>
        </div>
      </div>
      <div className="text-center ">
        <button onClick={() => navigate("/logs")}>Back</button>
        <button className="mx-5" onClick={() => handleEdit(index)}>
          Edit
        </button>
        <button onClick={() => handleDeleteByIndex(index)}>Delete</button>
      </div>
    </div>
  );
}

export default LogEntry;
