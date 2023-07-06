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
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Captain's Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {logsList.map((log, index) => (
            <tr key={index} onClick={() => handleDetail(index)}>
              <td>{log.captainName}</td>
              <td>{log.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogsList;
