import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

function ShowLog() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [captainLog, setCaptainLog] = useState([]);

  useEffect(() => {
    fetchData();
  }, [index]);

  async function fetchData() {
    try {
      let result = await axios.get(`${URL}/logs/${index}`);
      setCaptainLog(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDeleteByIndex() {
    try {
      await axios.delete(`${URL}/logs/${index}`);

      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="showLog">
      <h1>Show</h1>
      <p>
        {captainLog?.title} - By {captainLog?.captainName}
      </p>
      <p>{captainLog?.post}</p>
      <p>{captainLog?.mistakesWereMadeToday}</p>
      <p>Days since last crisis: {captainLog?.daysSinceLastCrisis}</p>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDeleteByIndex}>Delete</button>
    </div>
  );
}

export default ShowLog;
