import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./componenets/Nav";
import Logs from "./componenets/Logs";
import SingleLog from "./componenets/SingleLog";
import "./styles.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Logs />} />
        <Route path="/logs/:index" element={<SingleLog />} />
      </Routes>
    </Router>
  );
}

export default App;
