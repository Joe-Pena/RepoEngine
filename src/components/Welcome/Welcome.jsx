import React from 'react';
import { Card } from 'react-bootstrap';

import './Welcome.scss';

const Welcome = () => (
  <Card className="bg-primary my-5 mx-3">
    <Card.Body className="text-white text-left">
      <Card.Title className="font-weight-bolder welcome-heading">
        Finding Repositories has never been easier.
      </Card.Title>
      <Card.Text className="font-weight-light welcome-text">
        You need to find a repo with the most stars, or the highest amount of
        issues? That's why we're here.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Welcome;
