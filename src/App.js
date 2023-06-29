import './index.css';
import { Route, Routes } from "react-router-dom";
import { Logs } from './components/logs/logs';
import { PageNotFound } from './components/pageNotFound';

function App() {

  return (
    <>
      <header>
        <h1>Captain's Log</h1>
        <button id="newLogButton">NEW LOG</button>
      </header>
      <Routes>
        <Route path="/logs" element={<Logs/>} />
        <Route path="/logs/:index" element={<Logs/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
