import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function RenameCaptain() {

    const [logs, setLogs] = useState([])
    const [edit, setEdit] = useState(false)
    const [formData, setFormData] = useState('');
    const [lookup, setLookup] = useState('')
    const [indexes, setIndexes] = useState({})
    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        await axios.get(`http://localhost:9000/logs/`).then(res => {
            let apires = res.data
            apires.forEach((item, i) => {

                setIndexes(indexes => ({
                    ...indexes,
                    [item.captainName]: indexes[item.captainName] ? [...indexes[item.captainName], i] : [i]
                }));
                setLogs(apires)
            })
        }).catch(e => console.log(e))
    }

    function handleClick(args) {
        setEdit(!edit)
        setFormData(args)
        setLookup(args)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await indexes[lookup].forEach((item) => {
            axios.put(`http://localhost:9000/logs/${item}`, { ...logs[item], ['captainName']: formData }).then(res => {
            }).catch(e => console.log(e))
        })
    };
    function handleInputChange(event) {
        setFormData(event.target.value)
    }
    return (
        <>
            <h1>Captains</h1>
            <p><i>Click name to rename the Captain</i></p>
            <table>
                <tbody>
                    {logs.length > 0 && logs.map(item => item.captainName).filter((item, i, arr) => { return arr.indexOf(item) == i }).map((item, i) => {
                        return (
                            <tr key={i + 1}>
                                <td>
                                    <a onClick={() => handleClick(item)}>{item}</a>
                                    <br></br>
                                    <p></p>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {
                edit && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="captainName">New Name:</label>
                            <input
                                type="text"
                                id="captainName"
                                name="captainName"
                                value={formData}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )
            }
        </>
    )
}

export default RenameCaptain