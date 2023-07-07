import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EditForm.css";

function EditForm() {
  const { index } = useParams();

  const [captainNameState, setCaptainNameState] = useState("");
  const [titleState, setTitleState] = useState("");
  const [postState, setPostState] = useState("");
  const [daysSinceLastCrisisState, setDaysSinceLastCrisisState] = useState(0);
  const [mistakesWereMadeTodayState, setMistakesWereMadeTodayState] =
    useState(false);

  useEffect(() => {
    handleFetchData();
  }, []);

  async function handleFetchData() {
    try {
      let { data } = await axios.get(`http://localhost:3001/logs/${index}`);

      const {
        captainName,
        title,
        post,
        mistakesWereMadeToday,
        daysSinceLastCrisis,
      } = data;

      setCaptainNameState(captainName);
      setTitleState(title);
      setPostState(post);
      setDaysSinceLastCrisisState(daysSinceLastCrisis);
      setMistakesWereMadeTodayState(mistakesWereMadeToday);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
        await axios.put(`http://localhost:3001/logs/${index}`, {
        captainName: captainNameState,
        title: titleState,
        post: postState,
        mistakesWereMadeToday: mistakesWereMadeTodayState,
        daysSinceLastCrisis: daysSinceLastCrisisState,
      });

      alert("Updated successfully");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="edit-form-container">
      <div>
        <h2>Edit</h2>
      </div>
      <div className="edit-container-form">
        <form onSubmit={handleOnSubmit}>
          <div className="edit-container-input">
            <label>Captain's Name:</label>
            <input
              type="text"
              value={captainNameState}
              onChange={(e) => setCaptainNameState(e.target.value)}
            />
          </div>
          <div className="edit-container-input">
            <label>Title</label>
            <input
              type="text"
              value={titleState}
              onChange={(e) => setTitleState(e.target.value)}
            />
          </div>
          <div className="edit-container-input">
            <label>Post:</label>
            <textarea
              value={postState}
              onChange={(e) => setPostState(e.target.value)}
            ></textarea>
          </div>
          <div className="edit-container-input">
            <label>Days since Last Crisis</label>
            <input
              type="number"
              value={daysSinceLastCrisisState}
              onChange={(e) => setDaysSinceLastCrisisState(e.target.value)}
            />
          </div>
          <div>
            <label className="edit-container-label-checkbox">
              Mistakes were made today:{" "}
            </label>
            <br />
            <input
              type="checkbox"
              checked={mistakesWereMadeTodayState}
              onChange={() =>
                setMistakesWereMadeTodayState(!mistakesWereMadeTodayState)
              }
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

// function EditForm() {
//   const {
//     state: { data, index },
//   } = useLocation();

//   const {
//     captainName,
//     title,
//     post,
//     mistakesWereMadeToday,
//     daysSinceLastCrisis,
//   } = data;

//   const [captainNameState, setCaptainNameState] = useState(captainName);
//   const [titleState, setTitleState] = useState(title);
//   const [postState, setPostState] = useState(post);

//   const [daysSinceLastCrisisState, setDaysSinceLastCrisisState] =
//     useState(daysSinceLastCrisis);

//   const [mistakesWereMadeTodayState, setMistakesWereMadeTodayState] = useState(
//     mistakesWereMadeToday
//   );

//   async function handleOnSubmit(event) {
//     event.preventDefault();
//     try {
//       let result = await axios.put(`http://localhost:3001/logs/${index}`, {
//         captainName: captainNameState,
//         title: titleState,
//         post: postState,
//         mistakesWereMadeToday: mistakesWereMadeTodayState,
//         daysSinceLastCrisis: daysSinceLastCrisisState,
//       });

//       alert("Updated successfully");
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div className="edit-form-container">
//       <div>
//         <h2>Edit</h2>
//       </div>
//       <div className="edit-container-form">
//         <form onSubmit={handleOnSubmit}>
//           <div className="edit-container-input">
//             <label>Captain's Name:</label>
//             <input
//               type="text"
//               value={captainNameState}
//               onChange={(e) => setCaptainNameState(e.target.value)}
//             />
//           </div>
//           <div className="edit-container-input">
//             <label>Title</label>
//             <input
//               type="text"
//               value={titleState}
//               onChange={(e) => setTitleState(e.target.value)}
//             />
//           </div>
//           <div className="edit-container-input">
//             <label>Post:</label>
//             <textarea
//               value={postState}
//               onChange={(e) => setPostState(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="edit-container-input">
//             <label>Days since Last Crisis</label>
//             <input
//               type="number"
//               value={daysSinceLastCrisisState}
//               onChange={(e) => setDaysSinceLastCrisisState(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="edit-container-label-checkbox">
//               Mistakes were made today:{" "}
//             </label>
//             <br />
//             <input
//               type="checkbox"
//               checked={mistakesWereMadeTodayState}
//               onChange={() =>
//                 setMistakesWereMadeTodayState(!mistakesWereMadeTodayState)
//               }
//             />
//           </div>
//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

export default EditForm;