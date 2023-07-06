import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function ShowCardDetails() {
  const { index } = useParams();
  const navigate = useNavigate();

  const [singleLog, setSingleLog] = useState({});

  async function fetchData() {
    try {
      const result = await axios.get(`http://localhost:3001/logs/${index}`);
      setSingleLog(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDeleteOnClick() {
    async function deleteData() {
      try {
        const result = await axios.delete(
          `http://localhost:3001/logs/${index}`
        );
        return result.data;
      } catch (e) {
        console.log(e);
      }
    }

    deleteData();
    navigate(`/logs/`);
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Show</h1>

      <div className="card text-center mx-auto mt-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <div>
            <h2>
              {singleLog.title} - By {singleLog.captainName}
            </h2>

            <h4>{singleLog.post}</h4>
            <h5>Days since last crisis: {singleLog.daysSinceLastCrisis}</h5>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <Link to="/logs">
              <button className="btn btn-primary">Back</button>
            </Link>
            <Link to={`/logs/${index}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDeleteOnClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCardDetails;
