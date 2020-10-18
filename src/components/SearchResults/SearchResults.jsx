import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  }, [searchTerm]);

  return (
    <React.Fragment>
      {loading && <h3>Loadin...</h3>}
      {error && <h3>Error</h3>}
      {repos && !loading && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <Link to={`/repos/${repo.full_name}`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default SearchResults;
