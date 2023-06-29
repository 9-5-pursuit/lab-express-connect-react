import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Logs from "../pages/Logs";
import Log from "../pages/Log";
import NewLog from "../pages/NewLogs";
import EditLog from "../pages/EditLog";
import NotFound from "../pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/:index" element={<Log />} />
        <Route path="/logs/new" element={<NewLog />} />
        <Route path="/logs/:index/edit" element={<EditLog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
