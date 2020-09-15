import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.section`
  width: 100%;
  margin: auto;
  padding: 40px 20px;

  h3 {
    margin: auto;
    width: 350px;
    margin-top: 30vh;
  }

  h2 {
    color: ${({ theme }) => theme.colors['gray-dark']};

    margin-top: 50px;
  }
`;

export const RepositoryDetails = styled.div`
  margin-top: 80px;

  .created-at {
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors['gray-medium']};
  }

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      flex: 1;

      strong,
      p {
        display: block;
      }

      strong {
        font-size: 36px;
        color: ${({ theme }) => theme.colors['gray-dark']};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors['gray-medium']};
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;

    li {
      position: relative;
      cursor: pointer;

      &.active {
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 4px;
          margin-top: 10px;
          border-radius: 2px;
          background: ${({ theme }) => theme.colors.dark};
        }
      }

      &:hover {
        strong {
          color: ${({ theme }) => lighten(0.15, theme.colors.dark)};
        }

        span {
          color: ${({ theme }) => lighten(0.15, theme.colors.gray)};
        }
      }

      @media screen and (min-width: 800px) {
        & + li {
          margin-left: 80px;
        }
      }

      @media screen and (max-width: 800px) {
        & + li {
          margin-left: 30px;
        }
      }

      button {
        width: 100%;
        height: 100%;
        border: none;
        background: none;
      }

      strong,
      span {
        display: block;
        transition: color 0.2s;
      }

      strong {
        font-size: 36px;
        color: ${({ theme }) => theme.colors['gray-dark']};
      }

      span {
        margin-top: 4px;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  color: ${({ theme }) => theme.colors['grey-dark']};

  background: none;
  height: 30px;
  margin-top: 10px;

  svg {
    margin-right: 5px;
  }
`;

export const Error = styled.h3`
  font-size: 24px;
  margin-right: auto;
  margin-top: 80px;
  color: ${({ theme }) => theme.colors['grey-dark']};
`;
