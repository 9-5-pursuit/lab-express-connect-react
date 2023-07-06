import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogDetails() {
  const { arrayIndex } = useParams();
  const [showDetails, setShowDetails] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function handleBack(e) {
    e.preventDefault();
    navigate("/logs");
  }

  async function handleDelete() {
    try {
      let result = await axios.delete(
        `http://localhost:3001/logs/${arrayIndex}`
      );
      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(index) {
    navigate(`/logs/${index}/edit`);
  }

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${arrayIndex}`);
      setShowDetails(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>
        {showDetails.title} - By {showDetails.captainName}
      </h2>
      <h5>{showDetails.post}</h5>
      <h5>Days since last crisis: {showDetails.daysSinceLastCrisis}</h5>

      {showDetails.mistakesWereMadeToday === true ? (
        <h5>Mistakes were made today: Yes</h5>
      ) : (
        <h5>Mistakes were made today: No</h5>
      )}
      <button onClick={handleBack}>Back</button>
      <button onClick={() => handleEdit(arrayIndex)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default LogDetails;
