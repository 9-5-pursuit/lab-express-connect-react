import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Logs from "./components/logs";
import Nav from "./components/nav";
import Home from "./components/Home";
import Log from "./components/Log";
import EditForm from "./components/EditForm";
import NewLog from "./components/NewLog";

function App() {
  return <div>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/logs' element={<Logs />}/>
        <Route path='/logs/new' element={<NewLog />}/>
        <Route path='/logs/:index/edit' element={<EditForm />}/>
        <Route path='logs/:index' element={<Log />}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
