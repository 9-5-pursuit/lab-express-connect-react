import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul>
            <li>
                <a href='/logs'>Home</a>
            </li>
            <li>
                <a href='/logs/new'>Create Log</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav