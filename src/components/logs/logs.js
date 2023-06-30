import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mistakeIcon from "../images/boomIcon.png"
import emptyIcon from "../images/blank-pbg.png"

export function Logs(){
    const navigator = useNavigate()
    const [data, setData] = useState([])
    async function fetchData(){
        try{
          let result = await axios.get('http://192.168.1.251:3005/logs')
          console.log(result.data)
          setData(result.data)
        }catch(e){
          console.log(e)
        }
      }
    function getLogByIndex(item){
        let title = NaN
        if(item.target.classList.value === "contentItems"){
            title = item.target.children[2].innerText
        }else{
            title = item.target.parentNode.children[2].innerText 
        }
        console.log(title)
        let itemIndex = data.findIndex(x => x.title === title)
        navigator(`/logs/${itemIndex}`)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return(
        <div class="mainContent">
            <h2>Index</h2>
            <div class="contentBox" id="indexBox">
                <div class="contentBoxTitles">
                    <p class="col1">Mistakes</p>
                    <p class="col2">Capitain Name</p>
                    <p class="col3">See this log</p>
                </div>
                {data.map(item => {
                    let boomIcon = NaN
                    if(item.mistakesWereMadeToday){
                        console.log(item.mistakesWereMadeToday)
                        boomIcon = mistakeIcon
                    }else{
                        boomIcon = emptyIcon
                    }
                    return(
                        <>
                        <div class="contentItems" onClick={(item) => getLogByIndex(item)}>
                            <img class="col1" src={boomIcon}/>
                            <p class="col2">{item.captainName}</p>
                            <p class="col3">{item.title}</p>
                        </div>
                        <hr/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}