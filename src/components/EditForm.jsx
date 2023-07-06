import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { getLog, updateLog } from '../api';

function EditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    daysSinceLastCrisis: '',
    mistakesWereMadeToday: false,
  });

  useEffect(() => {
    getLog(index)
      .then((res) => setLog(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateLog(index, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  return (
    <div className=" edit m-5">
      <Link to={`/logs/${index}`}>
        <Button variant="primary" style={{ marginBottom: '1rem' }}>
          Back
        </Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Captain's Name</Form.Label>
          <Form.Control
            id="captainName"
            type="text"
            value={log.captainName}
            placeholder=""
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            id="title"
            type="text"
            value={log.title}
            placeholder=""
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="post">
          <Form.Label htmlFor="post">Post:</Form.Label>
          <Form.Control
            className="m-4"
            id="post"
            as="textarea"
            rows={4}
            value={log.post}
            placeholder=""
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="daysSinceLastCrisis">
          <Form.Label>Days Since Last Crisis:</Form.Label>
          <Form.Control
            id="daysSinceLastCrisis"
            type="number"
            value={log.daysSinceLastCrisis}
            placeholder=""
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="mistakesWereMadeToday" className="mb-3">
          <Form.Label>
            Days Since Last Crisis:
            <Form.Check
              id="mistakesWereMadeToday"
              type="checkbox"
              checked={log.mistakesWereMadeToday}
              onChange={handleCheckboxChange}
              style={{ width: '100px' }}
            />
          </Form.Label>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditForm;
