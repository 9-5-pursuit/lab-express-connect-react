import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <img src='https://images.unsplash.com/photo-1594189683218-b5a9a346a43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'/>
      <Link to="/logs">Go back to the home page</Link>
    </div>
  )
}

export default Error