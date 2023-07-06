import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateLog() {
    const initialFormData = {
        captainName: '',
        title: '',
        post: '',
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false
    };
    useEffect(() => {
        axios.get(`http://localhost:9000/logs`).then(res => {
            let indVal = res.data.length - 1
            setNavIndex(indVal.toString())
        }).catch(e => console.log(e))
    }, [])
    const [formData, setFormData] = useState(initialFormData);
    const [navIndex, setNavIndex] = useState('')
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: inputValue
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData['captainName'] === '') return
        setFormData(initialFormData)
        await axios.post(`http://localhost:9000/logs`, formData).then(res => {
            let indexVal = res.data.length - 1
            setNavIndex(indexVal.toString())
            navigate('/logs')
        }).catch(e => console.log(e))
    };
    async function handleDeleteByInd() {
        await axios.delete(`http://localhost:9000/logs/${navIndex}`).then(res => {
        }).catch(e => console.log(e))
    }

    return (
        <div style={{ padding: '2em' }}>
            <h1>New</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="captainName">Captain's Name:</label>
                    <input
                        type="text"
                        id="captainName"
                        name="captainName"
                        value={formData.captainName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <label htmlFor="textarea">Post:</label>
                <textarea
                    id="post"
                    name="post"
                    value={formData.post}
                    onChange={handleInputChange}
                />
                <div>
                    <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                    <input
                        type='number'
                        id="daysSinceLastCrisis"
                        name="daysSinceLastCrisis"
                        value={formData.daysSinceLastCrisis}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                    <input
                        type="checkbox"
                        id="mistakesWereMadeToday"
                        name="mistakesWereMadeToday"
                        checked={formData.mistakesWereMadeToday}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
                <button onClick={() => handleDeleteByInd()}>Delete</button>
            </form>
        </div>
    )
}

export default CreateLog