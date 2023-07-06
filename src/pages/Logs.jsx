import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Log from '../components/Log';
import { getLogs } from '../api';

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await getLogs();
        setLogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="logs">
      <h2>Index</h2>
      <div className="d-flex m-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Captain Name</th>
              <th>See This Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.captainName}</td>
                <td>
                  <Log log={log} index={index} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Logs;
