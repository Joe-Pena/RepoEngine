import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '../../hooks';

const SearchResults = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const queryParams = useQuery();

  const searchTerm = queryParams.get('q');

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      Axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
        .then((res) => {
          setRepos(res.data.items);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }
  }, []);

  return (
    <p>
      <strong>Location Props: {queryParams.get('q')}</strong>
    </p>
  );
};

export default SearchResults;
