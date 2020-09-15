import React from 'react';

import { Link } from 'react-router-dom';
import { FiStar, FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';

import RepositoryDTO from '../../DTOs/RepositoryDTO';

import formatNumber from '../../utils/formatNumber';

interface RepositoryProps {
  data: RepositoryDTO;
}

const Repository: React.FC<RepositoryProps> = ({ data }) => {
  return (
    <Container>
      <Link to={`/repository/${data.owner.login}/${data.id}`}>
        <div className="repo-avatar-author">
          <img
            src={data.owner.avatar_url}
            alt={data.owner.login}
            aria-label={data.owner.login}
            title={data.owner.login}
          />
          <span>{data.owner.login}</span>
        </div>

        <div className="repo-info">
          <div>
            <strong>{data.name}</strong>
            <span className="stars">
              <FiStar color="#000" />
              {formatNumber(data.stargazers_count)}
            </span>
          </div>

          <p>{data.description}</p>
        </div>
        <div>
          <FiChevronRight size={18} />
        </div>
      </Link>
    </Container>
  );
};

export default Repository;
