import React, { useState } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import RepositoryDTO from '../../DTOs/RepositoryDTO';
import Repository from '../../components/RepositoryItem';
import RepositoryList from '../../components/RepositoryList';

const FavoriteRepositories: React.FC = () => {
  const [favoritedRepositories] = useState<RepositoryDTO[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:FavoritedRepositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  return (
    <Container>
      <Header backToDashboard />

      <h1>Repositórios Favoritos</h1>

      <RepositoryList height="700">
        {favoritedRepositories &&
          favoritedRepositories.map(data => (
            <li key={data.id}>
              <Repository data={data} />
            </li>
          ))}
      </RepositoryList>
    </Container>
  );
};

export default FavoriteRepositories;
