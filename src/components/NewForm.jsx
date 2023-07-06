import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { createLog } from '../api';

function NewForm() {
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setLog((prevLog) => ({ ...prevLog, [id]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createLog(log);
      navigate('/logs');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" edit m-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Captain's Name</Form.Label>
          <Form.Control
            id="captainName"
            type="text"
            value={log.captainName}
            placeholder=""
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            id="title"
            type="text"
            value={log.title}
            placeholder=""
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="daysSinceLastCrisis">
          <Form.Label>Days Since Last Crisis:</Form.Label>
          <Form.Control
            id="daysSinceLastCrisis"
            type="number"
            value={log.daysSinceLastCrisis}
            placeholder=""
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="mistakesWereMadeToday" className="mb-3">
          <Form.Label>
            Days Since Last Crisis:
            <Form.Check
              id="mistakesWereMadeToday"
              type="checkbox"
              checked={log.mistakesWereMadeToday}
              onChange={handleInputChange}
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

export default NewForm;
