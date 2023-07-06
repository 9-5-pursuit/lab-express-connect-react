import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Log from "../Log/Log";

function LogIndex() {
  // const api = process.env.REACT_APP_API_URL;

  // console.log(api);
  const [logs, setLogs] = useState([]);

  async function fetchData() {
    try {
      // const result = await axios.get(`${api}/logs`);
      const result = await axios.get(`http://localhost:3001/logs`);
      console.log(result.data);
      setLogs(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {logs.map((item, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h3 className="text-center card-title font-weight-bold">
                  {item.captainName}
                </h3>
                <Log singleLog={item} index={index} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogIndex;
