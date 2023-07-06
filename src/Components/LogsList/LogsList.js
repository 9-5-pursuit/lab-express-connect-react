import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LogsList() {
  const [logsList, setLogsList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/logs");
      setLogsList(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDetail(index) {
    navigate(`/logs/${index}`);
  }

  return (
    <ul className="table">
      <div className="logTable">
        <h4>Captain</h4>
        <h4>Title</h4>
      </div>

      {logsList.map((log, index) => (
        <div
          key={index}
          className="logTable"
          onClick={() => handleDetail(index)}
        >
          <li>{log.captainName}</li>
          <li>{log.title}</li>
        </div>
      ))}
    </ul>
  );
}

export default LogsList;
