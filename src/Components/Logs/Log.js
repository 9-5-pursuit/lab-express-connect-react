import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function Log() {
    const [log, setLog] = useState({})
    const [logArray, setLogArray] = useState([]);

    const navigate = useNavigate();


    let params = useParams()
    let index = params.id
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
          let result = await axios.get(`http://localhost:3001/logs`);
          console.log(result.data)
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
            `http://localhost:3001/logs/${arrayIndex}`
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
                <div >
                    <h3>{log?.title} - by {log?.captainName}</h3>
                    <p>{log?.post}</p>
                    <p><strong>Days since last crisis:</strong> {log?.daysSinceLastCrisis}</p>
                </div>

                <div>
                    <ul>
                        <li>
                            <button onClick={() => handleBackButton()}>Back</button>
                        </li>
                        <li>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        </li>
                        <li>
                            <button onClick={() => handleDeleteByIndex(index)}>Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Log