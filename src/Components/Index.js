import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

function Index() {
  const [logs, setLogs] = useState([]);

  async function fetchData() {
    try {
      let result = await axios.get(`${URL}/logs`);
      setLogs(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="logs">
      <h1>Index</h1>
    </div>
  );
}

export default Index;
