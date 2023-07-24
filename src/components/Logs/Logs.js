import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "./Logs.css";

function Logs() {
  const { index } = useParams();
  const [logsArray, setLogsArray] = useState([]);
  // const [foundLog, setFoundLog] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      //   console.log(result.data);
      setLogsArray(result.data);
      //   console.log(logsArray);
    } catch (e) {
      console.log(e);
    }
  }

  // async function handleLogOnClick(index) {
  //   try {
  //     let result = await axios.get(`http://localhost:3001/logs/${index}`);
  //     console.log(result.data);
  //     setLogsArray(result.data);
  //     console.log(logsArray);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // function handleLogOnClick(captainName) {
  //   const foundIndex = logsArray.findIndex(
  //     (item) => item.captainName === captainName
  //   );
  //   const logOfFoundIndex = logsArray[foundIndex];
  //   setFoundLog(logOfFoundIndex);
  //   console.log(foundLog);

  //   return (
  //     <div className="card">
  //       <h2>Index</h2>
  //       <div className="card-body">
  //         <ul>{foundLog.map((item) => item.post)}</ul>
  //       </div>
  //     </div>
  //   );
  // }

  // function handleLogOnClick() {
  //   return;
  // }
  return (
    <div>
      <h2>Index</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this log</th>
          </tr>
        </thead>
        <tbody>
          {logsArray.map(
            ({ captainName, mistakesWereMadeToday, post }, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link className="logs-link" to={`/logs/${index}`}>
                      {mistakesWereMadeToday && <>&#128165;</>}
                    </Link>
                  </td>

                  <td>
                    <Link className="logs-link" to={`/logs/${index}`}>
                      {mistakesWereMadeToday}
                      {captainName}
                    </Link>
                  </td>
                  <td>
                    <Link className="logs-link" to={`/logs/${index}`}>
                      {post}
                    </Link>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
