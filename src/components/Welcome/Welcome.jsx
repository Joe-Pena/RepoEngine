import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Welcome = () => (
  <Card className="bg-primary my-5 mx-3">
    <Card.Body className="text-white text-left">
      <Card.Title className="font-weight-bolder">
        Finding Repositories has never been easier.
      </Card.Title>
      <Card.Text>
        You need to find a repo with the most stars, or the highest amount of
        issues? That's why we're here.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Welcome;
