import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LogIndex() {
  const navigate = useNavigate();
  const { index } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetchLogSingleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetching data
  async function fetchLogSingleData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);
      console.log(result.data);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDeleteIndex() {
    try {
      await axios.delete(`http://localhost:3001/logs/${index}`);
      navigate(`/logs`);
    } catch (e) {
      console.log(e);
    }
  }

  // functions used for deleting or going back to home page
  function handleGoBackToLogs() {
    navigate(`/logs`);
  }

  function handleEdit() {
    navigate(`/logs/${index}/edit`);
  }

  return (
    <>
      <h1>Show</h1>
      <div
        className="card"
        style={{ width: "60rem", marginLeft: "250px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h2 className="card-title">
            {data.title} - By {data.captainName}
          </h2>
          <p style={{ fontSize: "25px" }}>{data.post}</p>
          <p>
            <strong>Days since last crisis:</strong> {data.daysSinceLastCrisis}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          // width: "1500px",
          justifyContent: "center",
        }}
      >
        <button className="btn" onClick={handleGoBackToLogs}>
          Back
        </button>
        <button className="btn" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn" onClick={handleDeleteIndex}>
          Delete
        </button>
      </div>
    </>
  );
}

export default LogIndex;
