import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Logs from "./components/Logs/Logs";
import LogIndex from "./components/LogIndex/LogIndex";
import NewLog from "./components/NewLog/NewLog";
import LogEdit from "./components/LogEdit/LogEdit";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/logs" element={<Logs />}></Route>
          <Route path="/logs/new" element={<NewLog />}></Route>
          <Route path="/logs/:index" element={<LogIndex />}></Route>
          <Route path="/logs/:index/edit" element={<LogEdit />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
