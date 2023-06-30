import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import CreateLog from './CreateLog';
import ChangeLog from './ShowPage';
import GetLogs from './GetLogs';
import EditLog from './EditLog';
import ShowPage from './ShowPage';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/logs' element={<GetLogs />}/>
        <Route path='/logs/:index' element={<ShowPage />}/>
        <Route path='/logs/new' element={<CreateLog />}/>
        <Route path='/logs/:index/edit' element={<EditLog />}/>
      </Routes>
    </Router>
  );
}

export default App;