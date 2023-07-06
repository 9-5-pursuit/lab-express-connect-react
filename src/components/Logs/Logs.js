import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Logs.css";
const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logsArray, setLogsArray] = useState([]);

  async function fetchLogs() {
    try {
      let result = await axios.get(`http://localhost:3001/logs`);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div>
      <h2 className="h2-title">Index</h2>
      <div>
        <table className="table-container">
          <tbody id="logs">
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this Log</th>
            </tr>
            <tr>
              <td>
                <>&#128165;</>
              </td>

              <td>Some Captain Name</td>

              <td>SomePost</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Logs;
