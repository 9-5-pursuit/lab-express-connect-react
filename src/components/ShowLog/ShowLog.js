import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ShowLog() {
  const [logs, setLogs] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:3001/logs/${id}`);
      // console.log(result.data);
      alert(`Log successfully deleted`);
      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  }
  async function handleEdit() {
    navigate(`/logs/${id}/edit`);
  }
  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${id}`);
      //console.log(result.data);
      setLogs(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <h1>Show</h1>
      <div className="card text-bg-info shadow-lg">
        <div className="card-header">
          <h4 className="card-title">{`${logs.title} - ${logs.captainName}`}</h4>
        </div>
        <div className="card-body">
          <em>
            <p className="card-text">{logs.post}</p>
          </em>
          <h6 className="card-subtitle">{`Days since last crisis: ${logs.daysSinceLastCrisis}`}</h6>
        </div>
      </div>
      <br />
      <div className="container text-center row">
        <div className="col">
          <button className="btn btn-primary" onClick={() => navigate(`/logs`)}>
            Back
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowLog;
