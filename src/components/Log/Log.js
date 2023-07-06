import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";

function Log() {

  const [logArray, setLogArray] = useState([]);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      setLogArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <h1>Index</h1>
      <table>
        <tbody className="Log">
          {logArray.map((log, index) => (
            <tr key={index}>
              <td>
                <Link to={`/logs/${index}`}>
                  <h2>{log.title}</h2>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Log;
