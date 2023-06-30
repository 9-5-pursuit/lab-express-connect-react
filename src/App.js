import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import CreateLog from './CreateLog';
import ChangeLog from './ChangeLog';
import GetLogs from './GetLogs';
import EditLog from './EditLog';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/logs' element={<GetLogs />}/>
        {/* to update, delete, or view a log */}
        <Route path='/logs/:index' element={<GetLogs />}/>
        <Route path='/logs/new' element={<CreateLog />}/>
        <Route path='/logs/:index/edit' element={<EditLog />}/>

      </Routes>
    </Router>
  );
}

export default App;