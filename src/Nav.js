import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <h1>Captain's Log</h1>
      <ul>
        <li>
          <a href='/logs'>Home</a>
        </li>
        <li>
          <a href='/logs/new'>New Log</a>
        </li>
      </ul>
        <NavLink to='/logs/rename'>
          Rename a Captain
        </NavLink>
    </header>
  )
}

export default Nav