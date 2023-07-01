import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function LogIndex(){
    const navigator = useNavigate()
    const [data, setData] = useState([])
    const dataIndex = Object.values(useParams())[0]
    async function fetchData(){
        try{
            let result = await axios.get(`http://192.168.1.251:3005/logs/${dataIndex}`)
            console.log(result.data)
            setData(result.data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    },[])
    function backButton(){
        navigator('/logs')
    }
    function editButton(){
        navigator(`/logs/edit/${dataIndex}`)
    }
    async function deleteButton(){
        try{
            let result = await axios.delete(`http://192.168.1.251:3005/logs/${dataIndex}`)
            navigator('/logs')
        }catch(e){
            console.log(e)
        }
        console.log(dataIndex)
    }

    return(
        <div className="mainContent">
            <h2>Show</h2>
            <div class="contentBox" id="showBox">
                <h2 id="showTitle">{Object.values(data)[1]} - By {Object.values(data)[0]}</h2>
                <p>{Object.values(data)[2]}</p>
                <p id="daysSinceCrisis">Days since last crisis: {Object.values(data)[4]}</p>
            </div>
            <div id="showOptions">
                <button
                id="backShow"
                onClick={() => backButton()}
                >Back</button>
                <button
                id="editShow"
                onClick={() => editButton()}
                >Edit</button>
                <button
                id="deleteShow"
                onClick={() => deleteButton()}
                >Delete</button>
            </div>
        </div>
    )
}