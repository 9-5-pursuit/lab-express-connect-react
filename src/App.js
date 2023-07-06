import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import Index from "./Components/Index";
import NewLog from "./Components/NewLog";
import ShowLog from "./Components/ShowLog/ShowLog";
import EditLog from "./Components/EditLog/EditLog";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Index />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<ShowLog />} />
          <Route path="/logs/:index/edit" element={<EditLog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
