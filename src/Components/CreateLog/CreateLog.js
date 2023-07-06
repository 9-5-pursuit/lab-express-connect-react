import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    <form onSubmit={(e) => handleOnSubmit(e)}>
        <h2>New Log</h2>
        <br />
        <label>Captain's Name:</label>
        <input
            type="text"
            value={log.captainName}
            onChange={(e) => setLog({
                ...log,
                captainName: e.target.value})}
            required
        />
        <br />
        <label>Title</label>
        <input
            type="text"
            value={log.title}
            onChange={(e) => setLog({
                ...log,
                title: e.target.value})}
            required
        />
        <br />
        <label>Post:</label>
        <input
            type="text"
            value={log.post}
            onChange={(e) => setLog({
                ...log,
                post: e.target.value})}
            placeholder="What happened today?"
            required
        />
        <br />
        <label>Days Since Last Crisis</label>
        <input
            type="number"
            value={log.daysSinceLastCrisis}
            onChange={(e) => setLog({
                ...log,
                daysSinceLastCrisis: e.target.value})}
            required
        />
        <br />
        <label>Mistakes were made today?</label>
        <input
            type="checkbox"
            value={log.mistakesWereMadeToday}
            onChange={(e) => setLog({
                ...log,
                mistakesWereMadeToday: e.target.value})}
        />
        <button type="submit">Submit</button>
    </form>
  )
}

export default CreateLog