import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Index.css";

const URL = process.env.REACT_APP_API_URL;

function Index() {
  const [logs, setLogs] = useState([]);

  async function fetchData() {
    try {
      let result = await axios.get(`${URL}/logs`);
      setLogs(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="logs">
      <h1>Index</h1>
      <section>
        <table className="logs-table">
          <tbody>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>
            {logs.map((log, index) => {
              return (
                <tr id="log-row" key={index}>
                  <td>
                    <Link to={`/logs/${index}`}>
                      {log.mistakesWereMadeToday === true ? "💥" : ""}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/logs/${index}`}>{log.captainName}</Link>
                  </td>
                  <td>
                    <Link to={`/logs/${index}`}>{log.title}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Index;
