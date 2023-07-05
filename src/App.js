import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Logs from "./components/ViewLogs/Logs";
import CreateLog from "./components/CreateLog/CreateLog";
import EditLogs from "./components/EditLogs/EditLogs";
import Error from "./components/ErrorPage/Error";
import ShowLog from "./components/ShowLog/ShowLog";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Logs />}></Route>
        <Route path="/logs" element={<Logs />}></Route>
        <Route path="/logs/new" element={<CreateLog />}></Route>
        <Route path="/logs/:id" element={<ShowLog />}></Route>
        <Route path="/logs/:id/edit" element={<EditLogs />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
