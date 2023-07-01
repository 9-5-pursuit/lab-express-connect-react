import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function GetLogs() {

    const [logs, setLogs] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        await axios.get(`http://localhost:9000/logs/`).then(res => {
            if (res.data.length) setLogs(res.data)
            if (res.data.hasOwnProperty('captainName')) setLogs([res.data])
        })
            .catch(e => console.log(e))
    }
    return (
        <>
            <h1>Show</h1>
            <table>
                <tbody>
                {logs && logs.map((item, i) => {
                    return (
                        <tr key={i + 1}>
                            <td>
                                <h2>{item.captainName}</h2>
                            </td>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                <p>Mistakes: {item.mistakesWereMadeToday ? 'yes' : 'no'}</p>
                            </td>
                            <td className='Log'>
                                <a href={`/logs/${i}`}>Back</a>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default GetLogs