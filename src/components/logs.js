import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Logs(){
    const [logsArray, setLogsArray] = useState([])

    async function fetchLogData(){
        try{
            let result = await axios.get(`http://localhost:3001/logs`);
            setLogsArray(result.data);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchLogData();
    }, [])



    return(
        <div className="container mt-4">
            <h2>Current Logs</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Mistakes</th>
                    <th scope="col">Captain Name</th>
                    <th scope="col">Current Log</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        logsArray.map(({ captainName, mistakesWereMadeToday, post }, index) => {
                            return(
                                    <tr key={index}>
                                        <td>{mistakesWereMadeToday ? (<>💥</>) : ("")}</td>
                                        <td>{captainName}</td>
                                        <td>{post}</td>
                                        <td><Link to={`/logs/${index}`}><button>Click to view log</button></Link></td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Logs;