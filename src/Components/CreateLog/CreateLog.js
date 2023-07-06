import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./createlog.css"

function CreateLog() {
  const navigate = useNavigate()
  const [log, setLog] = useState({})

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
        let result = await axios.post("http://localhost:3003/logs", {
            "log": log
        })

        setLog({})

        navigate("/logs")
    } catch (e) {
        console.log(e)
    }
  }

  return (
    <div className="form-form-container">
        <form onSubmit={(e) => handleOnSubmit(e)} className="form-container-form">
            <h2>New Log</h2>
            <div className="form-container-input">
                <label>Captain's Name:</label>
                <input
                    type="text"
                    value={log?.captainName}
                    onChange={(e) => setLog({
                        ...log,
                        captainName: e.target.value})}
                    required
                />
            </div>
            
            <div className="form-container-input">
                <label>Title</label>
                <input
                    type="text"
                    value={log?.title}
                    onChange={(e) => setLog({
                        ...log,
                        title: e.target.value})}
                    required
                />
            </div>
            
            <div className="form-container-input">
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
            
            <div className="form-container-input">
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
            
            <div className="form-container-input">
                <label>Mistakes were made today?</label>
                <input
                    type="checkbox"
                    checked={log?.mistakesWereMadeToday}
                    onChange={() => setLog({
                        ...log,
                        mistakesWereMadeToday: !log.mistakesWereMadeToday})}
                />
            </div>
            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreateLog