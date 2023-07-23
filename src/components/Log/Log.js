import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Log.css";

function Log() {
  const { index } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

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

  function handleBack() {
    navigate("/logs");
  }

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:3001/logs/${index}`);
      navigate(`/logs/${index}/edit`);
    } catch (e) {
      console.log(e);
    }
  }

  function handleEdit() {
    navigate(`/logs/${index}/edit`);
  }

  return (
    <div className="container  mt-5">
      <div>
        <h2>Show</h2>
        <div className="content-container bg-light p-3 text-center">
          <p className="fs-4">
            {data?.title} by {data?.captainName}
          </p>
          <p className="fs-4">{data?.post}</p> {/* Increase font size */}
          <p className="fs-4">
            Days since last crisis: {data?.daysSinceLastCrisis}
          </p>
        </div>
        <div className="log-container-navigation mt-3">
          <ul className="list-unstyled d-flex justify-content-between">
            <li>
              <button className="btn btn-primary" onClick={handleBack}>
                Back
              </button>
            </li>
            <li>
              <button className="btn btn-secondary" onClick={handleEdit}>
                Edit
              </button>
            </li>
            <li>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Log;
