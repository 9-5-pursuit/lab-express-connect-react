import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function GetLogs() {
    const { id } = useParams()
    const [logs, setLogs] = useState(null)

    useEffect(() => {
        fetchData(id)
    }, [])
    async function fetchData(args) {
        await axios.get(`http://localhost:8888/logs/${args ?? ''}`).then(res => setLogs(res.data))
            .catch(e => console.log(e))
    }
    async function handleDeleteById(id) {
        await axios.delete(`http://localhost:8888/logs/${id}`).then(data => {
          let filteredArray = logs.filter(item => item.id !== id)
          //console.log(filteredArray);
          setLogs(filteredArray)
        }).catch(e => console.log(e))
      }
    return (
        <>
            <h1>Show</h1>
            <ul style={{ listStyle: 'none' }}>
                {logs && logs.map((item, i) => {
                    return (
                        <li key={i} >
                            <ul style={{ listStyle: 'none' }}>
                                <li key={i + 1}>
                                    <h2>{item.title} - By {item.captainName}</h2>
                                </li>
                                <li key={i + 2}>
                                    <h3>{item.post}</h3>
                                </li>
                                <li key={i + 3}>
                                    <strong>Days since last crisis: </strong>{item.daysSinceLastCrisis}
                                </li>
                            </ul>
                            <aside>
                                <button onClick={() => handleDeleteById(i)}>Delete</button>
                            </aside>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default GetLogs