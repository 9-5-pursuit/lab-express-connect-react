import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function EditLog() {
    const navigate = useNavigate();
   const params = useParams()
    let index = params.id
  const [log, setLog] = useState({});


  useEffect(() => {
    handleFetchDataByIndex();
  }, []);

  async function handleFetchDataByIndex() {
    try { 
      let result = await axios.get(`http://localhost:3001/logs/${index}`);


      setLog(result.data);
    } catch (e) {
      console.log(e);
    }
  }

 
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      let result = await axios.put(
        `http://localhost:3001/logs/${index}`,
        {
          ...log
        }
      );
      alert("UPDATED");
      setLog(result.data.data);
      navigate("/logs")
    } catch (e) {
      console.log(e);
    }
  }
    return (
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <h2>Edit Log</h2>
            <br />
            <label>Captain's Name:</label>
            <input id="captainName" type="text" value={log.captainName} onChange={(e) => setLog({ ...log,captainName: e.target.value})} required />
            <br />
            <label>Title</label>
            <input id="title" type="text" value={log.title} onChange={(e) => setLog({ ...log, title: e.target.value})} required />
            <br />
            <label>Post:</label>
            <input type="text" value={log.post} onChange={(e) => setLog({ ...log, post: e.target.value})} placeholder="What happened today?" required/>
            <br />
            <label>Days Since Last Crisis</label>
            <input type="number" value={log.daysSinceLastCrisis} onChange={(e) => setLog({ ...log, daysSinceLastCrisis: e.target.value})} required />
            <br />
            <label>Mistakes were made today?</label>
            <input id="mistakesWereMadeToday" type="checkbox" value={log.mistakesWereMadeToday} onChange={(e) => setLog({ ...log, mistakesWereMadeToday: e.target.value})}/>
            <button type="submit">Submit</button>
            <a href="/logs">Back</a>
        </form>
      )
}

export default EditLog;