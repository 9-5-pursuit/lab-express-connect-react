import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ShowLog() {
    const { index } = useParams();
    const [logs, setLogs] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        try {
            let res = await axios.get(`http://localhost:3001/logs/${index}`);
            setLogs([res.data]);
        } catch (e) {
            console.log(e);
        }
    }
    async function deleteLog() {
        try {
            await axios.delete(`http://localhost:3001/logs/${index}`);
            alert("Log has been deleted");
            navigate("/logs");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <h1>Show</h1>
            <table>
                <tbody>
                    {logs &&
                        logs.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td className="Log">
                                        <h2>
                                            {item.title} - By {item.captainName}
                                        </h2>

                                        <h3>{item.post}</h3>

                                        <strong>
                                            Days since last crisis:{" "}
                                        </strong>
                                        {item.daysSinceLastCrisis}
                                        <br></br>
                                        <a href="/logs">Back</a>
                                        <a href={`/logs/${index}/edit`}>Edit</a>

                                        <button onClick={() => deleteLog()}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}
export default ShowLog;
