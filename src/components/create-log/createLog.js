import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateLog(){
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const [crisis, setCrisis] = useState('')
    const [mistakes, setMistakes] = useState('')
    async function submitForm(){
        try{
            await axios.post()
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
                    onChange={(x) => setName(x)}
                    />
                    <br/>
                    <label htmlFor="newTitle">Title:</label>
                    <br/>
                    <input
                    type="text"
                    id="newTitle"
                    onChange={(x) => setTitle(x)}
                    />
                    <br/>
                    <label htmlFor="newPost">Post:</label>
                    <br/>
                    <input
                    type="text"
                    id="newPost"
                    onChange={(x) => setPost(x)}
                    />
                    <br/>
                    <label htmlFor="newCrisis">Days Since Last Crisis:</label>
                    <br/>
                    <input
                    type="number"
                    id="newCrisis"
                    onChange={(x) => setCrisis(x)}
                    />
                    <br/>
                    <label htmlFor="newMistakes">Mistakes were made today:</label>
                    <br/>
                    <input
                    type="checkbox"
                    id="newMistakes"
                    onChange={(x) => setMistakes(x)}
                    />
                    <button
                    id="newPost"
                    onChange={(x) => console.log(x)}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}