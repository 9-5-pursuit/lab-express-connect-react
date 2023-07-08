import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./Logs.css";

function Logs() {
    const [logsArray, setLogsArray] = useState([])

    async function fetchLogs(){
        try {
           let result = await axios.get(`http://localhost:3001/logs`)
          
           setLogsArray(result.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchLogs()
    }, [])
    
  return (
    <div>
        <h2 className='h2-title'>Index</h2>
        <div className='table-container'>
            <table id='logs'>
                <tbody>
                    <tr>
                        <th>Mistakes</th>
                        <th>Captain Name</th>
                        <th>See this log</th>
                    </tr>
                   {
                    logsArray.map(({captainName, post, mistakesWereMadeToday}, index)=>{
                        
                        return(
                            <tr key={index}>
                            <td>
                                <Link className='logs-link' to={`/logs/${index}`}>
                                {mistakesWereMadeToday && <>&#128165;</>}
                                </Link>
                                </td>
                            
                            <td> 
                                <Link className='logs-link' to={`/logs/${index}`}>
                                    {captainName} 
                                </Link>
                            </td>
                            <td><Link className='logs-link' to={`/logs/${index}`}>
                            {post}
                                </Link></td>
                        </tr>
                        )
                    })
                   }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Logs