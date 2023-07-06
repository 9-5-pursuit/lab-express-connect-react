import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-heading">
        <h1> Welcome to Captain's Log!</h1>
      </div>
      <div>
        <Link className="home-link" to="/logs">
          <h3>Show</h3>
        </Link>
      </div>
    </div>
  );
};

export default Home;
