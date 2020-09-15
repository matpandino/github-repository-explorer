import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  a {
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 20px;
      color: ${({ theme }) => theme.colors['gray-dark']};
    }

    p {
      margin-top: 7px;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  svg {
    /* margin-left: auto; */
    color: ${({ theme }) => theme.colors['gray-light']};
  }

  .repo-avatar-author {
    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    justify-content: center;
    align-items: center;
    text-align: center;

    word-break: break-word;

    span {
      margin-top: 7px;
      color: ${({ theme }) => theme.colors.gray};
    }

    width: 100px;
  }

  .stars {
    display: inline-flex;
    text-align: left;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.gray};

    svg {
      text-align: center;
      margin-right: 3px;
    }
  }

  .repo-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 16px;

    svg {
      text-align: center;
    }

    div {
      display: flex;
      justify-content: start;
      align-items: start;
      text-align: start;

      margin-left: 0px;

      strong {
        margin-right: 10px;
      }
    }
  }
`;
