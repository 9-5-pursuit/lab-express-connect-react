import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import New from "./pages/New";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:index" element={<Show />} />
        <Route path="/logs/:index/edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
