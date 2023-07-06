import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Logs from "./Components/Log/Logs"
import Log from "./Components/Log/Log"
import Nav from './Components/Nav/Nav'
import CreateLog from './Components/CreateLog/CreateLog'
import EditLog from './Components/EditLog/EditLog'

import "./App.css"


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/:index" element={<Log />} />
        <Route path="/logs/new" element={<CreateLog />} />
        <Route path="/logs/:index/edit" element={<EditLog />} />
      </Routes>
    </Router>
  )
}

export default App
