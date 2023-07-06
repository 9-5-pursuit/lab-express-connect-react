import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function LogsDetails() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);

      setLogs(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEdit() {
    navigate(`/logs/${index}/edit`);
  }

  async function handleDelete() {
    try {
      let result = await axios.delete(`http://localhost:3001/logs/${index}`);

      console.log(result.data);
      alert("Log deleted!");
      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h3>
        {logs.title} - By {logs.captainName}
      </h3>
      <p>{logs.post}</p>

      <p>
        <span>Days since last crisis:</span> {logs.daysSinceLastCrisis}
      </p>
      <div>
        <Link to={"/logs"}>
          <button>Back</button>
        </Link>
      </div>

      <div>
        <Link to={`/logs/${index}/edit`}>
          <button onClick={handleEdit}>Edit</button>
        </Link>
      </div>

      <div>
        <Link to={"/logs"}>
          <button onClick={handleDelete}>Delete</button>
        </Link>
      </div>
    </div>
  );
}

export default LogsDetails;
