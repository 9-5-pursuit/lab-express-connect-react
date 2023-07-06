import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, withRouter, useNavigate } from "react-router-dom";

function LogsForm() {
  const [logs, setLogs] = useState([]);
  let navigate = useNavigate();
  let index;
  useEffect(() => {
    axios
      .get(`http://localhost:3001/logs/${index}`)
      .then((response) => {
        logs(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);
  return <div>LogsForm</div>;
}

export default LogsForm;
