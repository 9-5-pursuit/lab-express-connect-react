import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ShowDetails from '../components/ShowDetails';

function Show() {
  return (
    <div className="show">
      <h2>Show</h2>
      <div className="button">
        {' '}
        <Link to="/logs">
          <Button className="btn bg-primary text-white">Back</Button>
        </Link>{' '}
      </div>
      <div className="show-details d-flex justify-content-center align-items-center">
        <ShowDetails />
      </div>
    </div>
  );
}

export default Show;
