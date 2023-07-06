import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Log from "./components/Log/Log";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CreateLog from "./components/CreateLog/CreateLog";
import EditLog from "./components/EditLog/EditLog";
import LogEntry from "./components/LogEntry/LogEntry";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Log />} />
        <Route path="/logs/new" element={<CreateLog />} />
        <Route path="/:index/edit" element={<EditLog />} />
        <Route path="/logs/:index" element={<LogEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
