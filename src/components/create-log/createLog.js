import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateLog(){
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const [crisis, setCrisis] = useState(NaN)
    const [mistakes, setMistakes] = useState(false)
    const navigator = useNavigate()
    async function submitForm(x){
        x.preventDefault()
        try{
            const result = await axios.post('http://192.168.1.251:3005/logs',{
                captainName: name,
                title: title,
                post: post,
                mistakesWereMadeToday: mistakes,
                daysSinceLastCrisis: crisis,
            })
            navigator('/logs')
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div class="mainContent">
            <h2>New</h2>
            <div id="createLog">
                <form>
                    <label htmlFor="newName">Captain's Name:</label>
                    <br/>
                    <input
                    type="text"
                    id="newName"
                    value={name}
                    onChange={(x) => setName(x.target.value)}
                    />
                    <br/>
                    <label htmlFor="newTitle">Title:</label>
                    <br/>
                    <input
                    type="text"
                    id="newTitle"
                    value={title}
                    onChange={(x) => setTitle(x.target.value)}
                    />
                    <br/>
                    <label htmlFor="newPost">Post:</label>
                    <br/>
                    <input
                    type="text"
                    id="newPost"
                    value={post}
                    onChange={(x) => setPost(x.target.value)}
                    />
                    <br/>
                    <label htmlFor="newCrisis">Days Since Last Crisis:</label>
                    <br/>
                    <input
                    type="number"
                    id="newCrisis"
                    value={crisis}
                    onChange={(x) => setCrisis(x.target.value)}
                    />
                    <br/>
                    <label htmlFor="newMistakes">Mistakes were made today:</label>
                    <br/>
                    <input
                    type="checkbox"
                    id="newMistakes"
                    value={mistakes}
                    onChange={() => setMistakes(!mistakes)}
                    />
                    <button
                    id="newPost"
                    onClick={(x) => submitForm(x)}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}