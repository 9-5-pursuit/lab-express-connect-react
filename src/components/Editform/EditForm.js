import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import "./EditForm.css"


function EditForm() {
    const { index } = useParams();

    
    const [captainNameState, setCaptainNameState] = useState("");

    const [titleState, setTitleState] = useState("");

    const [postState, setPostState] = useState("");

    const [daysSinceLastCrisisState, setDaysSinceLastCrisisState] = useState(0);

    const [mistakesWereMadeTodayState, setMistakesWereMadeTodayState] = useState(false);
    
    
    useEffect(() => {
      handleFetchdata()

    }, [])
    

    async function handleFetchdata(){
        try {
            let {data} = await axios.get(`http://localhost:3001/logs/${index}`)
            console.log(data)
            const {
                captainName,
                daysSinceLastCrisis,
                mistakesWereMadeToday,
                post,
                title,
            }=data;

            setCaptainNameState(captainName)
            setTitleState(title)
            setPostState(post)
            setDaysSinceLastCrisisState(daysSinceLastCrisis)
            setMistakesWereMadeTodayState(mistakesWereMadeToday)
        } catch (e) {
            console.log(e)
        }
    }
    async function handleOnSubmit(event){
        event.preventDefault()
        try {
           await axios.put(`http://localhost:3001/logs/${index}`,{
            captainName: captainNameState,
            daysSinceLastCrisis: daysSinceLastCrisisState,
            mistakesWereMadeToday: mistakesWereMadeTodayState,
            post: postState,
            title: titleState,
           }) 
           alert("Update Successfully")
        } catch (e) {
          console.log(e)  
          console.log(e.response)  
        }
    }
  return (
    <div className='edit-form-container'>
       <div>
        <h2>Edit</h2>
       </div>
       <div className='edit-container-form'>
        <form onSubmit={handleOnSubmit}>
            <div className='edit-container-input'>
                <label>Captain's name</label>
                <input type='text' 
                value={captainNameState} 
                onChange={(e)=>setCaptainNameState(e.target.value)}/>
             </div>
            
             <div className='edit-container-input'>
                <label>Title</label>
                <input type='text' 
                value={titleState}
                onChange={(e)=>setTitleState(e.target.value)}/>
             </div>
            
             <div className='edit-container-input'>
                <label>Post:</label>
                <input type='text' 
                value={postState}
                onChange={(e)=>setPostState(e.target.value)}/>
             </div>
             
             <div className='edit-container-input'>
                <label>Days Since Last Crisis</label>
                <input type='number' 
                value={daysSinceLastCrisisState}
                onChange={(e)=>setDaysSinceLastCrisisState(e.target.value)}/>
             </div>

             <div className='edit-container-label-checkbox'>
                <label>Mistakes Were Made Today</label>
                <input type='checkbox' 
                checked={mistakesWereMadeTodayState}
                onChange={()=>setMistakesWereMadeTodayState(!mistakesWereMadeTodayState)}/>
             </div>

             <button>Submit</button>
        </form>
       </div>
    </div>
  )
}

export default EditForm