import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function GetLogs() {
    const { index } = useParams()
    const [logs, setLogs] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetchData(index)
    }, [])
    async function fetchData(args) {
        await axios.get(`http://localhost:8888/logs/${args ?? ''}`).then(res => {
            if (res.data.length) setLogs(res.data)
            if (res.data.hasOwnProperty('captainName')) setLogs([res.data])
            })
            .catch(e => console.log(e))
    }
    async function handleDeleteByInd(index) {
        await axios.delete(`http://localhost:8888/logs/${index}`).then(data => {
          if (logs.length == 1) {setLogs([]); navigate('/logs');}
          else if (logs.length > 1) {
            let filteredArray = logs.filter((item, i) => i !== index)
            setLogs(filteredArray)
            navigate('/logs')
          }
        }).catch(e => console.log(e))
      }
    return (
        <>
            <h1>Show</h1>
            <table>
            
                {logs && logs.map((item, i) => {
                    return (
                        <tr>
                            <td key={i+1}>
           
                                    <h2>{item.title} - By {item.captainName}</h2>
                               
                             
                                    <h3>{item.post}</h3>
                               
                               
                                    <strong>Days since last crisis: </strong>{item.daysSinceLastCrisis}
                                    <button onClick={() => {fetchData(); navigate('/logs')}}>Back</button>
                                    <button onClick={() => {if (logs.length == 1) handleDeleteByInd(index); else if(logs.length>1) handleDeleteByInd(i)}}>Delete</button>
                            </td>
                            </tr>
                    )
                })}
            </table>
        </>
    )
}

export default GetLogs