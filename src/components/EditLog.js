import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditLog() {
    const { index } = useParams();
    const initialFormData = {
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    };
    async function fetchData() {
        try {
            let res = await axios.get(`http://localhost:3001/logs/${index}`);
            setFormData(res.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormData(initialFormData);
        try {
            await axios.put(`http://localhost:3001/logs/${index}`, formData);
            alert(`Log has been edited`);
            navigate(`/logs/${index}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <h1>Edit</h1>
            <a href="/logs">Back</a>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="captainName">Captain's Name:</label>
                    <input
                        type="text"
                        id="captainName"
                        name="captainName"
                        value={formData.captainName}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>
                <label htmlFor="textarea">Post:</label>
                <textarea
                    id="post"
                    name="post"
                    placeholder="what happened today?"
                    value={formData.post}
                    onChange={(e) =>
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
                <div>
                    <label htmlFor="daysSinceLastCrisis">
                        Days Since Last Crisis:
                    </label>
                    <input
                        type="number"
                        id="daysSinceLastCrisis"
                        name="daysSinceLastCrisis"
                        value={formData.daysSinceLastCrisis}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="mistakesWereMadeToday">
                        Mistakes were made today:
                    </label>
                    <input
                        type="checkbox"
                        id="mistakesWereMadeToday"
                        name="mistakesWereMadeToday"
                        checked={formData.mistakesWereMadeToday}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.checked,
                            }))
                        }
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditLog;
