import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  return (
    <Form>
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
          className="bg-light text-black"
        />
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
