import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logs() {
  const navigate = useNavigate();
  const [logsArray, setLogsArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      //   console.log(result);
      //   console.log(result.data);
      setLogsArray(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleEdit(id) {
    navigate(`/logs/${id}`);
  }

  return (
    <div className="container">
      <h1>Index</h1>
      <table className="table text-center table-hover">
        <thead>
          <tr>
            <th scope="col">{"Mistakes"}</th>
            <th scope="col">{"Captain Name"}</th>
            <th scope="col">{"See this log"}</th>
          </tr>
        </thead>
        <tbody>
          {logsArray.map((item, index) => {
            return (
              <tr
                key={index}
                className="text-center"
                onClick={() => handleEdit(index)}
              >
                <td>{item.mistakesWereMadeToday ? "💥" : " "}</td>
                <td>{item.captainName}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
