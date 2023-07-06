import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, withRouter, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogsForm() {
  const [logs, setLogs] = useState([]);
  let navigate = useNavigate();
  let index;
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
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
