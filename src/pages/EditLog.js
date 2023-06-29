import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const API = process.env.REACT_APP_API_URL;

export default function EditLog() {
  const navigate = useNavigate();
  const { index } = useParams();
  const [formData, setFormData] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setFormData(res.data))
      .catch(console.error);
  }, [index]);

  const handleChange = (e) => {
    const newObj = { ...formData };
    console.log(e.target.name);
    if (e.target.type === "checkbox") {
      newObj.mistakesWereMadeToday = !newObj.mistakesWereMadeToday;
    } else if (e.target.id === "daysSinceLastCrisis") {
      newObj[e.target.id] = Number(e.target.value);
    } else {
      newObj[e.target.id] = e.target.value;
    }
    setFormData(newObj);
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .put(`${API}/logs/${index}`, formData)
      .then((res) => {
        if (res.status === 200) {
          navigate("/logs/" + index);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
      className="new-log"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <h1>Edit</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          type="text"
          id="captainName"
          onChange={(e) => handleChange(e)}
          name="name"
          value={formData.captainName}
          required
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          name="title"
          value={formData.title}
          required
        />
        <label htmlFor="post">Post</label>
        <textarea
          name="post"
          id="post"
          cols="30"
          rows="10"
          value={formData.post}
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          onChange={handleChange}
          value={formData.daysSinceLastCrisis}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={handleChange}
          checked={formData.mistakesWereMadeToday ? true : false}
        />
        <br />
        <button>Submit</button>
      </form>
      <Link to="/logs">
        <button className="back-button">Back</button>
      </Link>
    </motion.div>
  );
}
