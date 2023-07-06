import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
        <ul>
            <li>
                <Link to="/logs">Captain's Log</Link>
            </li>
            <li>
                <Link to="/logs/new">Create Log</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav