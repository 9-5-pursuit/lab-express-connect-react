import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ShowPage() {
    const { index } = useParams()
    const [logs, setLogs] = useState(null)

    useEffect(() => {
        fetchData(index)
    }, [])
    async function fetchData(args) {
        await axios.get(`http://localhost:8888/logs/${args ?? ''}`).then(res => {
            setLogs([res.data])
        })
            .catch(e => console.log(e))
    }
    async function handleDeleteByInd(index) {
        await axios.delete(`http://localhost:8888/logs/${index}`).then(data => {

            setLogs([])

        }).catch(e => console.log(e))
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
                                <br></br>
                                <a href='/logs'>Back</a>
                                <a href='/logs/0/edit'>Edit</a>
                                <button onClick={() => handleDeleteByInd(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default ShowPage