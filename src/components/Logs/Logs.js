import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsClipboardXFill, BsClipboardCheck } from "react-icons/bs";
import axios from "axios";

function Logs() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLogsData();
  }, []);

  async function fetchLogsData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      //   console.log(result.data);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  function handleGetIndex(index) {
    navigate(`/logs/${index}`);
  }

  return (
    <div style={{ justifyContent: "center" }}>
      <div
        className="card"
        style={{ width: "60rem", marginLeft: "250px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h1>Index</h1>

          <table className="table table-hover">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Mistakes</th>
                <th scope="col">Captain Name</th>
                <th scope="col">See this Log</th>
              </tr>
            </thead>
            {/* <tbody> */}
            {data.map(
              ({ captainName, mistakesWereMadeToday, title }, index) => {
                return (
                  <tbody key={index + 100}>
                    <tr onClick={() => handleGetIndex(index)}>
                      <td>
                        {mistakesWereMadeToday ? (
                          <BsClipboardXFill />
                        ) : (
                          <BsClipboardCheck />
                        )}
                      </td>
                      <td>{captainName}</td>
                      <td>{title}</td>
                    </tr>
                  </tbody>
                );
              }
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Logs;
