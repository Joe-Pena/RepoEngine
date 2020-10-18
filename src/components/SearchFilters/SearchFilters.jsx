import React from 'react';
import { Form } from 'react-bootstrap';

const sortBy = [
  { displayName: 'Relevance', name: 'relevance' },
  { displayName: 'Stars', name: 'stars' },
];

const languages = [
  { displayName: 'JavaScript', name: 'javascript' },
  { displayName: 'Python', name: 'python' },
  { displayName: 'Ruby', name: 'ruby' },
  { displayName: 'C#', name: 'c#' },
  { displayName: 'C++', name: 'c++' },
  { displayName: 'Golang', name: 'golang' },
];

const SearchFilters = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Sort By:</Form.Label>
        {sortBy.map((option) => (
          <Form.Check
            type="radio"
            label={option.displayName}
            name="sorting"
            key={option.name}
          />
        ))}
      </Form.Group>
      <Form.Group>
        <Form.Label>Filter By Language:</Form.Label>
        {languages.map((lang) => (
          <Form.Check
            type="checkbox"
            label={lang.displayName}
            name="language"
            key={lang.name}
          />
        ))}
      </Form.Group>
    </Form>
  );
};

export default SearchFilters;
