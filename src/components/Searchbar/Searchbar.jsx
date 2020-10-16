import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Search
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          id="inlineFormInputGroup"
          placeholder="Search Repositories"
          className="bg-light text-black rounded-0"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="dark" type="submit" className="rounded-0">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
