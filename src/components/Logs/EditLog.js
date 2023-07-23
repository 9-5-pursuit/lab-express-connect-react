import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditForm() {
  const { index } = useParams();
  const [captainNameState, setCaptainNameState] = useState("");
  const [postState, setPostState] = useState("");
  const [daysSinceLastCrisisState, setDaysSinceLastCrisisState] = useState(0);
  const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState(false);
  const [titleState, setTitleState] = useState("");

  useEffect(() => {
    handleFetchData();
  }, []);

  async function handleFetchData() {
    try {
      let { data } = await axios.get(`http://localhost:3001/logs/${index}`);

      const {
        captainName,
        daysSinceLastCrisis,
        mistakesWereMadeToday,
        post,
        title,
      } = data;

      setCaptainNameState(captainName);
      setPostState(post);
      setDaysSinceLastCrisisState(daysSinceLastCrisis);
      setMistakesWereMadeToday(mistakesWereMadeToday);
      setTitleState(title);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/logs/${index}`, {
        captainName: captainNameState,
        daysSinceLastCrisis: daysSinceLastCrisisState,
        mistakesWereMadeToday: mistakesWereMadeToday,
        post: postState,
        title: titleState,
      });
      alert("updated successfully");
    } catch (e) {
      console.log(e.response);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-6">
          <h2 className="text-center">Edit</h2>

          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label>Captain's Name</label>
              <input
                className="form-control"
                type="text"
                value={captainNameState}
                onChange={(e) => setCaptainNameState(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                value={titleState}
                onChange={(e) => setTitleState(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Post:</label>
              <input
                className="form-control"
                type="text"
                value={postState}
                onChange={(e) => setPostState(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Days since last Crisis</label>
              <input
                className="form-control"
                type="text"
                value={daysSinceLastCrisisState}
                onChange={(e) => setDaysSinceLastCrisisState(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Mistakes were made today:</label>
              <input
                className=""
                type="checkbox"
                value={mistakesWereMadeToday}
                onChange={(e) => setMistakesWereMadeToday(e.target.checked)}
              />
            </div>

            <button className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
