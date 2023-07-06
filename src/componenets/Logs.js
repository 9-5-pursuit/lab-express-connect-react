import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Logs() {
  const [logsArray, setLogsArray] = useState([]);
  const [foundLog, setFoundLog] = useState({});

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

  //   async function handleLogOnClick() {
  //     try {
  //       let result = await axios.get(`http://localhost:3001/logs/${index}`);
  //       //   console.log(result.data);
  //       //   setLogsArray(result.data);
  //       console.log(logsArray);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  function handleLogOnClick(captainName) {
    const foundIndex = logsArray.findIndex(
      (item) => item.captainName === captainName
    );
    const logOfFoundIndex = logsArray[foundIndex];
    setFoundLog(logOfFoundIndex);
    console.log(foundLog);
    return (
      <div className="card">
        <div className="card-body">
          <ul>{foundLog.map((item) => item.post)}</ul>
        </div>
      </div>
    );
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {/* <th>Mistakes</th> */}
          <th>Captain Name</th>
          <th>See this log</th>
        </tr>
      </thead>
      <tbody>
        {logsArray.map((item) => (
          <tr key={item.post}>
            <td onClick={() => handleLogOnClick(item.captainName)}>
              {item.captainName}
            </td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Logs;
