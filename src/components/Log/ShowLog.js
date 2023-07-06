import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function ShowLog() {
  const { index } = useParams();
  const [logArray, setLogArray] = useState([]);
  const [log, setLog] = useState({});
  const navigate = useNavigate();

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

  async function handleDeleteByIndex(index) {
    try {
      await axios.delete(`http://localhost:3001/logs/${index}`);

      let filteredArray = logArray.filter(
        (log, logIndex) => logIndex !== Number(index)
      );
      setLogArray(filteredArray);
      alert("Log Deleted")
      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
    fetchLogData();
  }, []);

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
    </div>
  );
}

export default ShowLog;
