import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

const RepoDetails = () => {
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const repoPath = location.pathname;

  useEffect(() => {
    if (repoPath) {
      Axios.get(`https://api.github.com${repoPath}`)
        .then((res) => setRepo(res.data))
        .catch((err) => setError(true));
    }
  }, []);

  return (
    <React.Fragment>
      {loading && <h2>loadin...</h2>}
      {error && <h2>error</h2>}
      {repo && !loading && !error && <h1>{repo.name}</h1>}
    </React.Fragment>
  );
};

export default RepoDetails;
