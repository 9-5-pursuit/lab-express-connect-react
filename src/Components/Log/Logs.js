import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

function Logs() {
  const navigate = useNavigate();

  const [logArray, setLogArray] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(logArray)
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3003/logs");
      setLogArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="App">
      {/* {todoArray.map((item) => {
        return (
          <div key={item.id}>
            {item.todo}{" "}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDeleteById(item.id)}>Delete</button>
          </div>
        );
      })} */}

      {
        logArray.map((item, index) => {
          return (
            <div key={uuidv4()}>
              <a href={`http://localhost:3000/logs/${index}`}>{item.title}</a>
            </div>
          )
        })
      }
    </div>
  );
}

export default Logs;