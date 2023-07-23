import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Logs from "./components/Logs/Logs";
import Log from "./components/Log/Log";
import EditLog from "./components/Logs/EditLog";
import NewLog from "./components/Logs/NewLog";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/logs" element={<Logs />}></Route>
        <Route path="/logs/:index" element={<Log />}></Route>
        <Route path="/logs/:index/edit" element={<EditLog />}></Route>
        <Route path="/logs/new" element={<NewLog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
