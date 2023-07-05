import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ShowLog() {
  const { index } = useParams();

  const [log, setLog] = useState({});

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);
      setLog(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
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
    </div>
  );
}

export default ShowLog;
