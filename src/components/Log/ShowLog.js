import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function ShowLog() {
  const { index } = useParams();
  const [logArray, setLogArray] = useState([]);
  const [log, setLog] = useState({});
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);
      setLog(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchLogData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      setLogArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
    fetchLogData();
  }, []);

  async function handleDeleteByIndex(index) {
    setShowConfirmation(true);
  }

  async function handleConfirmDelete() {
    try {
      await axios.delete(`http://localhost:3001/logs/${index}`);

      let filteredArray = logArray.filter((log, i) => i !== Number(index));
      setLogArray(filteredArray);
      alert("Log Deleted");
      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  function handleCancelDelete() {
    setShowConfirmation(false);
  }

  return (
    <div className="App">
      <h1>Show</h1>
      <h3>
        {log.title} - By {log.captainName}
      </h3>
      <p>{log.post}</p>
      <p>
        <strong>Days since last crisis:</strong> {log.daysSinceLastCrisis}
      </p>
      <div>
        <Link to="/logs">Back</Link>
      </div>
      <div>
        <Link to={`/logs/${index}/edit`}>Edit</Link>
      </div>
      <button onClick={() => handleDeleteByIndex(index)}>Delete</button>

      {showConfirmation && (
        <div>
          <p>Are you sure you want to delete this log?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}

export default ShowLog;
