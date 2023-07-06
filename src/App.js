import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import LogsList from "./Components/LogsList/LogsList";
import LogDetails from "./Components/LogDetails/LogDetails";
import CreateNewLog from "./Components/CreateNewLog/CreateNewLog";
import EditLog from "./Components/EditLog/EditLog";
import "./index.css";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/logs" element={<LogsList />}></Route>
        <Route path="/logs/:arrayIndex" element={<LogDetails />}></Route>
        <Route path="/logs/new" element={<CreateNewLog />}></Route>
        <Route path="/logs/:arrayIndex/edit" element={<EditLog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
