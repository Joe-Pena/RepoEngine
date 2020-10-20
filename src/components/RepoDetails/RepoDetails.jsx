import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Badge, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RepoDetails = () => {
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const repoPath = location.pathname;

  useEffect(() => {
    setLoading(true);
    if (repoPath) {
      axios
        .get(`https://api.github.com${repoPath}`)
        .then((res) => {
          setRepo(res.data);
          setLoading(false);
        })
        .catch((err) => setError(true));
    }
  }, []);

  console.log(repo);
  return (
    <React.Fragment>
      {loading && <h2>loading...</h2>}
      {repo && repo.owner && (
        <Card className="my-3 mx-2">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  {repo.name} -{' '}
                  <span className="text-muted font-weight-light">
                    {repo.owner.login}
                  </span>
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  Last Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </Card.Subtitle>
                <Badge variant="warning" className="mr-2">
                  <FontAwesomeIcon icon="star" className="mr-1" />
                  {repo.stargazers_count}
                </Badge>
                <Badge variant="dark" className="mr-2">
                  <FontAwesomeIcon icon="code-branch" className="mr-1" />
                  {repo.forks_count}
                </Badge>
                <Badge variant="danger" className="mr-2">
                  <FontAwesomeIcon icon="wrench" className="mr-1" />
                  {repo.open_issues_count}
                </Badge>
                <Badge variant="info">
                  <FontAwesomeIcon icon="eye" className="mr-1" />
                  {repo.watchers_count}
                </Badge>
                <Card.Text className="mt-2">{repo.description}</Card.Text>
              </div>
              <Image
                className="d-none d-sm-block"
                height="80"
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
                roundedCircle
              />
            </div>
          </Card.Body>
        </Card>
      )}
    </React.Fragment>
  );
};

export default RepoDetails;
