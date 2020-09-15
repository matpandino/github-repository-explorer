import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Container, RepositoryDetails, Error, FavoriteButton } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

import formatNumber from '../../utils/formatNumber';

import RepositoryDTO from '../../DTOs/RepositoryDTO';
import RepositoryItem from '../../components/RepositoryItem';
import RepositoryList from '../../components/RepositoryList';

interface RepositoryParams {
  id: string;
  user: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<RepositoryDTO | null>(null);
  const [favoritedRepositories, setFavoritedRepositories] = useState<
    RepositoryDTO[]
  >(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:FavoritedRepositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });
  const [userRepos, setUserRepos] = useState<RepositoryDTO[] | null>(null);
  const [repositoryError, setRepositoryError] = useState('');
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const repositoryPromises = Promise.all([
      api.get<RepositoryDTO>(`repositories/${params.id}`),
      api.get<RepositoryDTO[]>(`users/${params.user}/repos`),
    ]);

    repositoryPromises
      .then(response => {
        const [repositoryResponse, userReposResponse] = response;

        setRepository(repositoryResponse.data);
        setUserRepos(userReposResponse.data);
        setRepositoryError('');
      })
      .catch(error => {
        const repositoryExists = favoritedRepositories.find(repositorySaved => {
          return String(params.id) === String(repositorySaved.id);
        });

        // eslint-disable-next-line no-console
        console.error(error.response);

        if (repositoryExists) {
          setRepository(repositoryExists);
          return;
        }
        setRepositoryError(error.response.data);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:FavoritedRepositories',
      JSON.stringify(favoritedRepositories),
    );

    const repositoryExists = favoritedRepositories.find(
      repositorySaved => repository?.id === repositorySaved.id,
    );

    setIsFavorited(!!repositoryExists);
  }, [favoritedRepositories, repository]);

  const handleFavoriteRepository = (): void => {
    if (isFavorited) {
      const repositoriesFiltered = favoritedRepositories.filter(
        repositorySaved => repository?.id !== repositorySaved.id,
      );

      setFavoritedRepositories([...repositoriesFiltered]);
      return;
    }

    if (repository) {
      setFavoritedRepositories([repository, ...favoritedRepositories]);
      setIsFavorited(true);
    }
  };

  return (
    <Container>
      <Header backToDashboard />

      {repository && (
        <RepositoryDetails>
          <header>
            <div>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
                aria-label={repository.owner.login}
                title={repository.owner.login}
              />
            </div>

            <div>
              <strong>{repository.full_name}</strong>

              {repository.created_at && (
                <span className="created-at">
                  <i>
                    Data de criação:
                    {'  '}
                    {new Date(repository.created_at).toLocaleDateString(
                      'pt-BR',
                    )}
                  </i>
                </span>
              )}
              <p>{repository.description}</p>

              <FavoriteButton
                type="button"
                onClick={() => handleFavoriteRepository()}
              >
                {isFavorited ? (
                  <>
                    <FaHeart color="#f55" />
                    Desfavoritar
                  </>
                ) : (
                  <>
                    <FaRegHeart color="#f55" />
                    Favoritar
                  </>
                )}
              </FavoriteButton>
            </div>
          </header>
          <ul>
            <li className="repository-info">
              <button type="button">
                <strong>{formatNumber(repository.stargazers_count)}</strong>
                <span>Stars</span>
              </button>
            </li>
            <li className="repository-info ">
              <button type="button">
                <strong>{formatNumber(repository.forks_count)}</strong>
                <span>Forks</span>
              </button>
            </li>
            <li className="repository-info ">
              <button type="button">
                <strong>{formatNumber(repository.open_issues_count)}</strong>
                <span>Issues abertas</span>
              </button>
            </li>
            <li className="repository-info ">
              <button type="button">
                {repository.language ? (
                  <>
                    <strong>{repository.language}</strong>
                    <span>Linguagem principal</span>
                  </>
                ) : (
                  <span>Linguagem principal Não Definida</span>
                )}
              </button>
            </li>
          </ul>
        </RepositoryDetails>
      )}

      {repositoryError && (
        <Error>Ops, aconteceu um erro ao carregar o repositório</Error>
      )}

      {repository?.owner.login && userRepos && (
        <h2>
          Outros repositórios de
          {'  '}
          {repository?.owner.login}
        </h2>
      )}

      <RepositoryList>
        {userRepos &&
          userRepos.map(data => (
            <li key={data.id}>
              <RepositoryItem data={data} />
            </li>
          ))}
      </RepositoryList>

      {loading && <h3>Carregando informações do repositório...</h3>}
    </Container>
  );
};

export default Repository;
