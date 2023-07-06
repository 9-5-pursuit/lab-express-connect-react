import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreateLog from "./components/CreateLog";
import GetLogs from "./components/GetLog";
import EditLog from "./components/EditLog";
import ShowLog from "./components/ShowLog";
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/logs" element={<GetLogs />} />
                <Route path="/logs/:index" element={<ShowLog />} />
                <Route path="/logs/new" element={<CreateLog />} />
                <Route path="/logs/:index/edit" element={<EditLog />} />
            </Routes>
        </Router>
    );
}
export default App;
