import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Log() {
  let navigate = useNavigate();

  const [logArray, setLogArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      // console.log(result);

      setLogArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  function handleLogEntry(index) {
    navigate(`/logs/${index}`);
  }

  return (
    <div className="App">
      <div>
        <h1>Index</h1>
      </div>
      {logArray.map((item) => {
        return (
          <div
            className="border border-dark my-4 cursor-pointer "
            onClick={() => handleLogEntry(logArray.indexOf(item))}
            key={logArray.indexOf(item)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default Log;
