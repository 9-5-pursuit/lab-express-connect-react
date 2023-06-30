import './index.css';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Logs } from './components/logs/logs';
import { LogIndex } from './components/log-index/logIndex';
import { PageNotFound } from './components/pageNotFound';
import { CreateLog } from './components/create-log/createLog';
import { UpdateLogs } from './components/update-log/update-log';

function App() {
  const navigator = useNavigate()
  return (
    <>
      <header>
        <h1>Captain's Log</h1>
        <button
        id="newLogButton"
        onClick={() => navigator('/logs/create')}
        >NEW LOG</button>
      </header>
      <Routes>
        <Route path="/logs" element={<Logs/>} />
        <Route path="/logs/:index" element={<LogIndex/>} />
        <Route path="/logs/create" element={<CreateLog/>} />
        <Route path="/logs/edit/:index" element={<UpdateLogs/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
