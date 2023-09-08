import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Logs from "./Components/Logs/Logs"
import Log from "./Components/Logs/Log"
import EditLog from "./Components/EditLog/editlog";
import CreateLog from "./Components/CreateLog/createlog";

function App() {
  return (
  <Router>
    <Nav />
    <Routes>
      <Route path="/logs" element={<Logs/>} />
      <Route path="/logs/:id" element={<Log/>}/>
      <Route path="/logs/:id/edit" element={<EditLog/>}/>
      <Route path="/logs/new" element={<CreateLog/>}/>
    </Routes>


  </Router>
  )
}

export default App;
