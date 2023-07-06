import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    try {
      let result = await axios.get("http://localhost:3001/logs");

      console.log(result);
      console.log(result.data)
      setLogs(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Mistakes</th>
          <th>Captain Name</th>
          <th>See this log</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => {
          return (
            <tr>
              <td>{log.mistakesWereMadeToday ? "💥" : ""}</td>
              <td>{log.captainName}</td>
              <td>
                <Link to={`/logs/${index}`}>{log.title}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Logs;
