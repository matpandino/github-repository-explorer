import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Button from '../../components/Button';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.section`
  width: 100%;
  margin: auto;
  padding: 40px 20px;

  .search-results {
    display: block;
    margin-top: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.dark};
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  width: 100%;

  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 1px solid ${({ theme }) => theme.colors.background};

    ${({ hasError, theme }) =>
      hasError &&
      css`
        border: 2px solid ${theme.colors.error};
        border-right: 0;
      `};

    @media screen and (max-width: 600px) {
      flex: unset;
    }
  }
`;

export const SearchButton = styled(Button)`
  background: ${({ theme }) => theme.colors.green};

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.green)};
  }
`;

export const Error = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 8px;
`;
