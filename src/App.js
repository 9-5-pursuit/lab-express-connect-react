import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Logs from './pages/Logs';
import Show from './pages/Show';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="/logs/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
