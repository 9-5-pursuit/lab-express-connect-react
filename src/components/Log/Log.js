import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./Log.css";

function Log() {
  const { index } = useParams();

  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);

      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  function handleNavigateBack() {
    navigate("/logs");
  }

  async function handleDeleteByIndex(index) {
    try {
      await axios.delete(`http://localhost:3001/logs/${index}`);

      navigate("/logs");
    } catch (e) {
      console.log(e);
    }
  }

  function handleEdit(index) {
    navigate(`/logs/${index}/edit`);
  }
  return (
    <div className="log-container">
      <div>
        <h2>Show</h2>

        <div className="log-container-content">
          <p>
            {data?.title} by {data?.captainName}
          </p>

          <p>{data?.post}</p>

          <p>Days Since Last Crisis: {data?.daysSinceLastCrisis}</p>
        </div>

        <div className="log-container-navigation">
          <ul>
            <li>
              <button onClick={handleNavigateBack}>Back</button>
            </li>
            <li>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </li>
            <li>
              <button onClick={() => handleDeleteByIndex(index)}>Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Log;
