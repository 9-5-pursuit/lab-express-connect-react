import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        <table>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this log</th>
          </tr>
          <tr>
            {logs.map((log, index) => {
              return (
                <td key={index}>
                  <Link to={`/logs/${index}`}>
                    {log.mistakesWereMadeToday === true ? "💥" : ""}{" "}
                    {log.captainName} {log.title}
                  </Link>
                </td>
              );
            })}
          </tr>
        </table>
      </section>
    </div>
  );
}

export default Index;
