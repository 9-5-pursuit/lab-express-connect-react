import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./components/Log/Log";
import ShowLog from "./components/Log/ShowLog";
import Nav from "./components/Nav/Nav";
import CreateLog from "./components/CreateLog/CreateLog";
import EditLog from "./components/EditLog/EditLog";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/logs" element={<Log />} />
        <Route path="/logs/:index" element={<ShowLog />} />
        <Route path="/logs/new" element={<CreateLog />} />
        <Route path="/logs/:index/edit" element={<EditLog />} />
      </Routes>
    </Router>
  );
}

export default App;
