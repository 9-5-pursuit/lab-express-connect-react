import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function GetLogs() {

    const [logs, setLogs] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData(args) {
        await axios.get(`http://localhost:8888/logs/`).then(res => {
            if (res.data.length) setLogs(res.data)
            if (res.data.hasOwnProperty('captainName')) setLogs([res.data])
        })
            .catch(e => console.log(e))
    }
    return (
        <>
            <h1>Show</h1>
            <table>
                {logs && logs.map((item, i) => {
                    return (
                        <tr key={i + 1}>
                            <td key={i + 2} className='Log'>
                                <h2>{item.title} - By {item.captainName}</h2>
                                <h3>{item.post}</h3>
                                <strong>Days since last crisis: </strong>{item.daysSinceLastCrisis}
                                <a href={`/logs/${i}`}>Back</a>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default GetLogs