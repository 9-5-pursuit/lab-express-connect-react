import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LogIndex from "./components/LogIndex/LogIndex";
import NewLog from "./components/NewLog/NewLog";
// import Log from "./components/Log/Log";
import ShowCardDetails from "./components/ShowCardDetails/ShowCardDetails";
import EditLog from "./components/EditLog/EditLog";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/logs" element={<LogIndex />} />
        <Route path="/logs/new" element={<NewLog />} />
        <Route path="/logs/:index" element={<ShowCardDetails />} />
        <Route path="/logs/:index/edit" element={<EditLog />} />
      </Routes>
    </Router>
  );
}

export default App;
