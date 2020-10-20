import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';
import { useQuery } from '../../hooks';
import { sortingRules, languages } from './filters';

const SearchFilters = ({ params, onParamChange }) => {
  const history = useHistory();
  const queryParams = useQuery();
  const [lang, setLang] = useState('');
  const [sort, setSort] = useState('');

  const handleSort = (e) => {
    setSort(e.target.value);
    queryParams.set('sort', e.target.value);
    history.push(`/search?${queryParams}`);
  };

  const handleLang = (e) => {
    setLang(e.target.value);

    const searchTerms = queryParams.get('q');
    const searchQuery = searchTerms.split('+')[0];

    const newLang = `language:${e.target.value}`;
    const newQuery = slugify(`${searchQuery} ${newLang}`, '+');

    queryParams.set('q', newQuery);
    history.push(`/search?${queryParams}`);
  };

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Sort By:</Form.Label>
          {sortingRules.map((option) => (
            <Form.Check
              type="radio"
              label={option.displayName}
              name="sorting"
              value={option.name}
              key={option.name}
              onChange={(e) => handleSort(e)}
            />
          ))}
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Filter By Language:</Form.Label>
          {languages.map((lang) => (
            <Form.Check
              type="radio"
              label={lang.displayName}
              name="language"
              value={lang.name}
              key={lang.name}
              onChange={(e) => handleLang(e)}
            />
          ))}
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default SearchFilters;
