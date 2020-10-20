import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

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
      const qParams = {
        q: searchTerm,
        sort: sortingRule,
      };
      setParams(qParams);
    }
  }, [searchTerm, sortingRule, pageNum]);

  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <Container className="col-lg-8">
      <SearchFilters params={params} onParamChange={handleParamChange} />
      <div className="d-flex justify-content-center">
        {loading && <Spinner animation="border" variant="primary" />}
        {error && (
          <h3>
            Oops, something is wrong on our end, please try refreshing the page.
          </h3>
        )}
      </div>
      {!error && repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      <RepoPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
};

export default SearchResults;
