import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Log(){

    let { index } = useParams();
    let navigate = useNavigate();

    const [data, setData] = useState(null);

    async function fetchLogDetails(){
        try{
            let result = await axios.get(`http://localhost:3001/logs/${index}`);
            setData(result.data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchLogDetails()
    }, [])

    function handleBackClick(){
        navigate('/logs');
    }

    function handleEditClick(){
        navigate(`/logs/${index}/edit`);
    }

    async function handleDelete(){
        console.log('delete');
        let result = await axios.delete(`http://localhost:3001/logs/${index}`);
        console.log(result.data);
        alert("You have successfully deleted this log.");
        navigate('/logs');
    }

    return(
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container bg-body-tertiary my-5 p-4">
                <h1 className="display-4">{data?.title} - By {data?.captainName}</h1>
                <p className="lead">{data?.post}</p>
                <p>Days since last crisis: <span className="text-primary">{data?.daysSinceLastCrisis}</span></p>
            </div>
        </div>
        <div className="container d-flex justify-content-center">
            <button type="button" className="btn btn-outline-primary m-2" onClick={handleBackClick}>Back</button>
            <button type="button" className="btn btn-outline-primary m-2" onClick={handleEditClick}>Edit</button>
            <button type="button" className="btn btn-outline-primary m-2" onClick={handleDelete}>Delete</button>
        </div>
        </>
    )
}

export default Log;