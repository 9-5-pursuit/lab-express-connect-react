//Create a component that displays a list of all logs.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Log() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    try {
      const response = await axios.get("http://localhost:3001/logs");
      setLogs(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2 className="h2-title m-3">Index</h2>
      <div className="table-container">
        <table className="table m-5">
          <tbody>
            <tr>
              <th scope="col">Mistakes</th>
              <th scope="co">Captain Name</th>
              <th scope="col">See this log</th>
            </tr>

            {logs.map(({ captainName, post, mistakesWereMadeToday }, index) => (
              <tr key={index}>
                <td>
                  <Link
                    className="logs-link text-decoration-none"
                    to={`/logs/${index}`}
                  >
                    {mistakesWereMadeToday && <>💥</>}
                  </Link>
                </td>
                <td>
                  <Link
                    className="logs-link text-decoration-none"
                    to={`/logs/${index}`}
                  >
                    {captainName}
                  </Link>
                </td>
                <td>
                  <Link
                    className="logs-link text-decoration-none"
                    to={`/logs/${index}`}
                  >
                    {post}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
