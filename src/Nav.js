import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/logs'>Home</Link>
            </li>
            <li>
                <Link to='/logs/new'>Create Log</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav