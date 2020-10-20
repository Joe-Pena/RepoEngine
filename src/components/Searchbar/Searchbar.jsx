import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

import { useQuery } from '../../hooks';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const history = useHistory();
  const queryParams = useQuery();

  const searchTerms = queryParams.get('q');
  // The search term might contain language queries,
  // so we remove those before we set the input value.
  const searchQuery = searchTerms ? searchTerms.split(' ').shift() : '';
  const languageQuery = searchTerms ? searchTerms.split(' ').slice(1) : '';

  useEffect(() => {
    if (searchQuery) {
      setInput(searchQuery);
    }
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      history.push(`/search?q=${input} ${languageQuery}`);
    }
  };

  return (
    <div className="row d-flex justify-content-center">
      <Form className="col-lg-8" onSubmit={(e) => handleSubmit(e)}>
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="dark" type="submit" className="rounded-0">
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Searchbar;
