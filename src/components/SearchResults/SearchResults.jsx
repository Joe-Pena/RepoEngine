import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Axios from 'axios';

import useFetchRepos from '../../hooks/useFetchRepos';
import { useQuery } from '../../hooks';
import SearchFilters from '../SearchFilters';
import RepoCard from '../RepoCard';
import RepoPagination from '../RepoPagination';

const SearchResults = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { repos, loading, error, hasNextPage } = useFetchRepos(params, page);
  const queryParams = useQuery();

  const searchTerm = queryParams.get('q');
  const sortingRule = queryParams.get('sort');
  const pageNum = queryParams.get('page');

  useEffect(() => {
    if (searchTerm) {
      setParams({ q: searchTerm });
    }
  }, [searchTerm, sortingRule, pageNum]);

  return (
    <Container>
      <SearchFilters />
      <RepoPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error</h3>}
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
      <RepoPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
};

export default SearchResults;
