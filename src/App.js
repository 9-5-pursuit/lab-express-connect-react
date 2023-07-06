import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import CreateLog from './CreateLog';
import GetLogs from './GetLogs';
import EditLog from './EditLog';
import ShowPage from './ShowPage';
import Error from './Error';
import RenameCaptain from './RenameCaptain';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/logs' element={<GetLogs />}/>
        <Route path='/logs/:index' element={<ShowPage />}/>
        <Route path='/logs/new' element={<CreateLog />}/>
        <Route path='/logs/:index/edit' element={<EditLog />}/>
        <Route path='/logs/rename' element={<RenameCaptain />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;