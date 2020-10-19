import React from 'react';
import { Badge, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const RepoCard = ({ repo }) => {
  return (
    <Card className="my-3">
      <Link
        className="text-dark text-decoration-none"
        to={`/repos/${repo.full_name}`}
      >
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
              height="50"
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              roundedCircle
            />
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default RepoCard;
