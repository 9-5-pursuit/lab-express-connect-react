import React, { useEffect, useState} from "react";
import axios from "axios";

function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            let result = await axios.get("http://localhost:3001/logs");
            setLogs(result.data)
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
          <h2 >Index</h2>
          <div>
            <table id="logs">
              <tbody>
                <tr>
                  <th>Mistakes</th>
                  <th>Captain Name</th>
                  <th>See this log</th>
                </tr>
                {logs.map(
                  ({ captainName, title, mistakesWereMadeToday }, index) => {
                    return (
                      <tr key={index}>
                        <td>{mistakesWereMadeToday && <>💀</>}</td>
    
                        <td>{captainName}</td>
    
                        <td><a href={`http://localhost:3000/logs/${index}`}>{title}</a></td>
    
                        <td></td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    
    export default Logs;