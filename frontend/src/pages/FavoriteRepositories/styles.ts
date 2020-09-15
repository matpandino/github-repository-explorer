import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 40px 20px;

  h1 {
    color: ${({ theme }) => theme.colors['gray-dark']};

    margin-top: 50px;
  }
`;
