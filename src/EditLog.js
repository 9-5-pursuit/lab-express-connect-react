import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function EditLog() {
    const { index } = useParams()
    const initialFormData = {
        captainName: '',
        title: '',
        post: '',
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false
    };

    useEffect(() => {
        axios.get(`http://localhost:8888/logs/${index}`).then(res => setFormData(res.data)).catch(e => console.log(e))
    }, [])
    const [formData, setFormData] = useState(initialFormData);
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
        setFormData(initialFormData)
        await axios.put(`http://localhost:8888/logs/${index}`, formData).then(res => {
            navigate(`/logs/${index}`)
        }).catch(e => console.log(e))
    };

    return (
        <div>
            <h1>Edit</h1>
            <a href='/logs'>Back</a>
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
                    placeholder='what happened today?'
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
            </form>
        </div>
    )
}

export default EditLog