import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Logs from "./components/Logs/Logs";
import Log from "./components/Log/Log";
import EditForm from "./components/EditForm/EditForm";
import NewLogForm from "./components/NewLogForm/NewLogForm";

import "./styles.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/new" element={<NewLogForm />} />
        <Route path="/logs/:index" element={<Log />} />
        <Route path="/logs/:index/edit" element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
