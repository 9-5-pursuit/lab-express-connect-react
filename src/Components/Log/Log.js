import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Log() {
    const [log, setLog] = useState({})
    const [logArray, setLogArray] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    let params = useParams()

    let index = params.index

    async function fetchData() {
        try {
          let result = await axios.get(`http://localhost:3003/logs`);
          setLogArray(result.data);
          setLog(result.data[index])
        } catch (e) {
          console.log(e);
        }
    }

    function handleEdit(arrayIndex) {
        navigate(`/logs/${arrayIndex}/edit`);
    }
    
    function handleBackButton() {
        navigate(`/logs`)
    }

    async function handleDeleteByIndex(arrayIndex) {
        try {
          let result = await axios.delete(
            `http://localhost:3003/logs/${arrayIndex}`
          );
    
          let filteredArray = logArray.filter((item) => item !== logArray[index]);
    
          setLogArray(filteredArray);

          alert("DELETED")

          navigate(`/logs`)
        } catch (e) {
          console.log(e);
        }
    }

    return (
        <div>
            <h2>Show</h2>
            <div>
                <h3>{log.title} - by {log.captainName}</h3>
                <p>{log.post}</p>
                <p><strong>Days since last crisis:</strong> {log.daysSinceLastCrisis}</p>
                <div>
                    <button onClick={() => handleBackButton()}>Back</button>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDeleteByIndex(index)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Log