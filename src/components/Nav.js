import React from "react";
import { NavLink } from "react-router-dom";
import Logs from "./Logs/Logs";
import LogsForm from "./Logs/LogsForm";

function Nav() {
  return (
    <div>
      {/*ALL LOGS*/}
      <NavLink to="/logs" element={<Logs />}>
        Logs
      </NavLink>
      {/*NEW LOG FORM*/}
      <NavLink to="API/logs/new" element={<LogsForm />}>
        New Log
      </NavLink>
      ;
    </div>
  );
}

export default Nav;
