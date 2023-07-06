import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// const API = process.env.REACT_APP_API_URL;

import { getLog, deleteLog } from '../api';

function ShowDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLog(index);
        setLog(response.data);
      } catch (error) {
        navigate('/not-found');
      }
    };

    fetchData();
  }, [index, navigate]);

  const handleDelete = async () => {
    try {
      await deleteLog(index);
      navigate('/logs');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      style={{
        width: '50rem',
        height: '15rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      <Card.Body>
        <Card.Header style={{ marginBottom: '2rem' }}>
          {log.title} - By {log.captainName}
        </Card.Header>
        <Card.Title>{log.post}</Card.Title>
        <Card.Text>
          Days since last crisis: <span>{log.daysSinceLastCrisis}</span>
        </Card.Text>{' '}
        <Link
          className="btn bg-primary text-white m-2"
          to={`/logs/${index}/edit`}
        >
          Edit
        </Link>
        <Button
          className="btn bg-danger text-white delete-button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ShowDetails;
