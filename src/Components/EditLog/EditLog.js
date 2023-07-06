import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./editlog.css"

function EditLog() {
  const { index } = useParams();

  const [log, setLog] = useState({});

  useEffect(() => {
    handleFetchDataByIndex();
  }, []);

  async function handleFetchDataByIndex() {
    try { 
      let result = await axios.get(
        `http://localhost:3003/logs/${index}`
      );

      setLog(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.put(
        `http://localhost:3003/logs/${index}`,
        {
          ...log
        }
      );

      alert("UPDATED");

      setLog(result.data.data);
    } catch (e) {
      console.log(e);
    }
  }
    return (
        <div className="edit-form-container">
            <form onSubmit={(e) => handleOnSubmit(e)} className="edit-container-form">
                <h2>Edit Log</h2>
                <div className="edit-container-input">
                    <label>Captain's Name:</label>
                    <input
                        id="captainName"
                        type="text"
                        value={log?.captainName}
                        onChange={(e) => setLog({
                            ...log,
                            captainName: e.target.value})}
                        required
                    />
                </div>

                <div className="edit-container-input">
                    <label>Title</label>
                    <input
                        id="title"
                        type="text"
                        value={log?.title}
                        onChange={(e) => setLog({
                            ...log,
                            title: e.target.value})}
                        required
                    />
                </div>
                
                <div className="edit-container-input">
                    <label>Post:</label>
                    <input
                        type="text"
                        value={log?.post}
                        onChange={(e) => setLog({
                            ...log,
                            post: e.target.value})}
                        placeholder="What happened today?"
                        required
                    />
                </div>
                
                <div className="edit-container-input">
                    <label>Days Since Last Crisis</label>
                    <input
                        type="number"
                        value={log?.daysSinceLastCrisis}
                        onChange={(e) => setLog({
                            ...log,
                            daysSinceLastCrisis: e.target.value})}
                        required
                    />
                </div>
                
                <div className="edit-container-label-checkbox">
                    <label>Mistakes were made today?</label>
                    <input
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    checked={log?.mistakesWereMadeToday}
                    onChange={(e) => setLog({
                        ...log,
                        mistakesWereMadeToday: !log.mistakesWereMadeToday})}
                    />
                </div>
                
                
                <button type="submit">Submit</button>
                <a href="/logs">Back</a>
            </form>
        </div>
        
      )
}

export default EditLog;