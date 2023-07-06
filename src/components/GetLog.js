import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GetLog() {
    const [logs, setLogs] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        try {
            let res = await axios.get(`http://localhost:3001/logs/`);
            setLogs(res.data);
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
                        logs.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <h2>{item.captainName}</h2>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>
                                        <p>
                                            Mistakes:{" "}
                                            {item.mistakesWereMadeToday
                                                ? "yes"
                                                : "no"}
                                        </p>
                                    </td>
                                    <td className="Log">
                                        <a href={`/logs/${index}`}>View</a>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}

export default GetLog;
