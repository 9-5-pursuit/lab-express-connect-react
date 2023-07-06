import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

function Logs() {
  const navigate = useNavigate();

  const [logArray, setLogArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3003/logs");
      setLogArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }


  // return (
  //   <div className="App">
  //     {/* {todoArray.map((item) => {
  //       return (
  //         <div key={item.id}>
  //           {item.todo}{" "}
  //           <button onClick={() => handleEdit(item.id)}>Edit</button>
  //           <button onClick={() => handleDeleteById(item.id)}>Delete</button>
  //         </div>
  //       );
  //     })} */}

  //     {
  //       logArray.map((item, index) => {
  //         return (
  //           <div key={uuidv4()}>
  //             <a href={`http://localhost:3000/logs/${index}`}>{item.title}</a>
  //           </div>
  //         )
  //       })
  //     }
  //   </div>
  // );

  return (
    <div>
      <h2 className="h2-title">Index</h2>
      <div className="table-container">
        <table id="logs">
          <tbody>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>

            {logArray.map(
              ({ captainName, post, mistakesWereMadeToday }, index) => {
                return (
                  <tr key={index}>
                    <td>{mistakesWereMadeToday && <>&#128165;</>}</td>

                    <td>{captainName}</td>

                    <td>{post}</td>

                    <td><a href={`http://localhost:3000/logs/${index}`}>SEE MORE</a></td>
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