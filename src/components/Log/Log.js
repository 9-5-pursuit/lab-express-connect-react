import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Log() {
  const navigate = useNavigate();

  const [logArray, setLogArray] = useState([]);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      // console.log(result);
      // console.log(result.data);
      setLogArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Logs</h1>
      <ul>
        {logArray.map((log, index) => (
          <li key={index}>
            <Link to={`/logs/${index}`}>
              <h3>{log.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Log;
