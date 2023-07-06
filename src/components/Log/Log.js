import React from "react";
import { NavLink } from "react-router-dom";

function Log({ singleLog, index }) {
  return (
    <div className="text-center">
      <button className="btn btn-info">
        <NavLink
          className="link-underline link-underline-opacity-0 fw-semibold"
          to={`/logs/${index}`}
        >
          {singleLog.title}
        </NavLink>
      </button>
    </div>
  );
}

export default Log;
