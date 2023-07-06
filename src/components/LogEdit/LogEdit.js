import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function LogEdit() {
  const { index } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });

  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetchDataLogIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchDataLogIndex() {
    try {
      let result = await axios.get(`http://localhost:3001/logs/${index}`);

      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }
  console.log(data);
  async function handleSubmit(e) {
    e.preventDefault();

    const {
      captainName,
      title,
      post,
      daysSinceLastCrisis,
      mistakesWereMadeToday,
    } = data;

    console.log(captainName);
    try {
      await axios.put(`http://localhost:3001/logs/${index}`, {
        captainName,
        title,
        post,
        daysSinceLastCrisis,
        mistakesWereMadeToday,
      });

      console.log(data);

      setData({
        mistakesWereMadeToday: false,
      });

      navigate(`/logs`);
    } catch (e) {
      console.log(e);
    }
  }

  function title(e) {
    setData({ ...data, title: e.target.value });
  }
  function post(e) {
    setData({ ...data, post: e.target.value });
  }
  function daysSinceLastCrisis(e) {
    setData({ ...data, daysSinceLastCrisis: Number(e.target.value) });
  }

  function mistakesWereMadeToday() {
    // setStatus(false);

    if (data.mistakesWereMadeToday) {
      console.log(status);
      setStatus(false);
      setData({ ...data, mistakesWereMadeToday: !data.mistakesWereMadeToday });
    } else {
      console.log(status);
      setStatus(true);
      setData({ ...data, mistakesWereMadeToday: true });
    }

    // data.mistakesWereMadeToday
    //   ? setData({ ...data, mistakesWereMadeToday: !data.mistakesWereMadeToday })
    //   : setData({
    //       ...data,
    //       mistakesWereMadeToday: true,
    //     });
  }

  function handleGoingBack() {
    navigate(`/logs`);
  }

  return (
    <div>
      <h1>Edit</h1>
      <div
        className="card"
        style={{ width: "60rem", marginLeft: "250px", marginTop: "100px" }}
      >
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name</label>
            <input
              type="text"
              name="captainName"
              id="captainName"
              value={data.captainName}
              //   this is an alternative to do it within one single line rather than doing a seperate function then calling it
              //   value={}
              onChange={(e) =>
                setData({
                  ...data,
                  captainName: e.target.value,
                })
              }
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title}
              onChange={title}
            />
            <br />
            <label htmlFor="post">Post</label>
            <textarea
              type="text"
              name="post"
              id="post"
              value={data.post}
              onChange={post}
            ></textarea>
            <br />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
            <input
              type="number"
              name="daysSinceLastCrisis"
              id="daysSinceLastCrisis"
              value={Number(data.daysSinceLastCrisis)}
              onChange={daysSinceLastCrisis}
            />
            <br />
            <label htmlFor="mistakesWereMadeToday">
              Mistakes were made today
            </label>
            <input
              type="checkbox"
              name="mistakesWereMadeToday"
              id="mistakesWereMadeToday"
              onChange={mistakesWereMadeToday}
              checked={data.mistakesWereMadeToday}
            />
            <br />
            <button className="btn" onClick={handleGoingBack}>
              Back
            </button>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogEdit;
