import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewLog() {
  // useNavigate in order to be able to navigate to the page i need
  const navigate = useNavigate();

  //   all the useStates
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: null,
    mistakesWereMadeToday: false,
  });
  const [status, setStatus] = useState(false);

  //   async functions
  async function handleSubmit(e) {
    e.preventDefault();

    const {
      captainName,
      title,
      post,
      daysSinceLastCrisis,
      mistakesWereMadeToday,
    } = log;
    console.log(log);
    try {
      await axios.post(`http://localhost:3001/logs`, {
        captainName,
        title,
        post,
        daysSinceLastCrisis,
        mistakesWereMadeToday,
      });

      console.log(log);

      setLog({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: null,
        mistakesWereMadeToday: false,
      });

      navigate(`/logs`);
    } catch (e) {
      console.log(e);
    }
  }

  //   functions to update the value of the keys according to what the user puts in

  function title(e) {
    setLog({ ...log, title: e.target.value });
  }
  function post(e) {
    setLog({ ...log, post: e.target.value });
  }
  function daysSinceLastCrisis(e) {
    setLog({ ...log, daysSinceLastCrisis: Number(e.target.value) });
  }
  function mistakesWereMadeToday() {
    // console.log("im clicked");
    if (status) {
      console.log(status);
      setStatus(false);
      setLog({ ...log, mistakesWereMadeToday: false });
    } else {
      console.log(status);
      setStatus(true);
      setLog({ ...log, mistakesWereMadeToday: true });
    }
  }

  // return for my component
  return (
    <div>
      <h1>New</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          type="text"
          name="captainName"
          id="captainName"
          //   this is an alternative to do it within one single line rather than doing a seperate function then calling it
          onChange={(e) => setLog({ ...log, captainName: e.target.value })}
          required
        />
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={title} required />
        <br />
        <label htmlFor="post">Post</label>
        <textarea
          type="text"
          name="post"
          id="post"
          onChange={post}
          required
        ></textarea>
        <br />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          type="number"
          name="daysSinceLastCrisis"
          id="daysSinceLastCrisis"
          onChange={daysSinceLastCrisis}
          required
        />
        <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          type="checkbox"
          name="mistakesWereMadeToday"
          id="mistakesWereMadeToday"
          onClick={mistakesWereMadeToday}
        />
        <br />
        <button>Delete</button>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewLog;
