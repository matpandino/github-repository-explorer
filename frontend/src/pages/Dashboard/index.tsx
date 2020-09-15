/* eslint-disable react/jsx-one-expression-per-line */
import React, { FormEvent, useRef, useState } from 'react';

import { Container, Title, Form, Error, SearchButton } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import RepositoryDTO from '../../DTOs/RepositoryDTO';
import RepositoryItem from '../../components/RepositoryItem';
import RepositoryList from '../../components/RepositoryList';

import formatNumber from '../../utils/formatNumber';

const Dashboard: React.FC = () => {
  const repositoryInputRef = useRef<HTMLInputElement>(null);
  const [repositories, setRepositories] = useState<RepositoryDTO[]>([]);

  const [inputError, setInputError] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [searchResultCount, setSearchResultCount] = useState<null | number>(
    null,
  );
  const [loading, setLoading] = useState(false);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const newRepo = repositoryInputRef?.current?.value;

    if (!newRepo) return setInputError('Digite o nome do repositório');
    setLastSearch(newRepo);

    const findRepositoryWithTheSameName = repositories.find(
      repository => newRepo === repository.id,
    );
    if (findRepositoryWithTheSameName)
      return setInputError('Esse repositório já foi adicionado');

    try {
      setLoading(true);

      const { data } = await api.get(
        `/search/repositories?q=${newRepo}&page=1`,
      );

      setSearchResultCount(data.total_count);
      setRepositories(data.items);

      if (repositoryInputRef.current) repositoryInputRef.current.value = '';
      return data;
    } catch (err) {
      setInputError('Não foi possível encontrar o repositório');
      return err;
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header />
      <Title>Procure repósitorios do GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          name="repository"
          id="repository"
          placeholder="Digite o nome do repositório"
          ref={repositoryInputRef}
        />
        <SearchButton type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Pesquisar'}
        </SearchButton>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {searchResultCount && (
        <span className="search-results">
          {formatNumber(searchResultCount)} resultado(s) encontrado(s) para{' '}
          <i>{lastSearch}</i>
        </span>
      )}

      <RepositoryList height="450">
        {repositories.map(repository => (
          <li key={repository.id}>
            <RepositoryItem data={repository} />
          </li>
        ))}
      </RepositoryList>
    </Container>
  );
};

export default Dashboard;
