import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function EditForm(){
    const { index } = useParams();

    const navigate = useNavigate();

    const [captainName, setCaptainName] = useState("");
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState(false);
    const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState(0);

    async function fetchLog(){
        try{
            let result = await axios.get(`http://localhost:3001/logs/${index}`)
            
            const {
                captainName,
                title,
                post,
                mistakesWereMadeToday,
                daysSinceLastCrisis
            } = result.data;

            setCaptainName(captainName);
            setTitle(title);
            setPost(post);
            setMistakesWereMadeToday(mistakesWereMadeToday);
            setDaysSinceLastCrisis(daysSinceLastCrisis);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchLog();
    }, [])

    async function handleSubmit(e){
        e.preventDefault();
        try{
            let result = await axios.put(`http://localhost:3001/logs/${index}`, {
                captainName: captainName,
                title: title,
                post: post,
                mistakesWereMadeToday: mistakesWereMadeToday,
                daysSinceLastCrisis: daysSinceLastCrisis
            })
            alert("You've successfully updated this log.")
            navigate('/logs')
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <div className="container bg-body-tertiary p-3 my-5">
            <h1>Edit Log</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group m-2">
                <label>Captain's Name</label>
                <input type="text" className="form-control" value={captainName} onChange={(e) => setCaptainName(e.target.value)}/>
            </div>
            <div className="form-group m-2">
                <label>Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-group m-2">
                <label>Post</label>
                <textarea className="form-control" rows="2" value={post} onChange={(e) => setPost(e.target.value)}></textarea>
            </div>
            <div className="form-group m-2">
                <label>Days Since Last Crisis:</label>
                <input type="number" className="form-control" value={daysSinceLastCrisis} onChange={(e) => setDaysSinceLastCrisis(e.target.value)}/>
            </div>
            <div className="form-check m-2">
                <input type="checkbox" className="form-check-input" checked={mistakesWereMadeToday} onChange={() => setMistakesWereMadeToday(!mistakesWereMadeToday)}/>
                <label className="form-check-label">Mistakes were made today</label>
            </div>
            <button type="submit" className="btn btn-outline-primary m-2">Submit</button>
            </form>
        </div>
    )
}

export default EditForm;