import styled from 'styled-components';

interface RepositoryListProps {
  height?: string;
}

const RepositoryList = styled.ul<RepositoryListProps>`
  margin-top: 50px;
  width: 100%;

  max-height: ${props => (props.height ? props.height : '360')}px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 7.5px;
    border-left: 5px solid #f1f1f1;
    border-right: 5px solid #f1f1f1;
    width: 24px;
  }

  li {
    display: flex;

    background: #fff;
    width: 100%;
    border-radius: 5px;
    transition: transform 0.2s;

    & + li {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(5px);
    }
  }
`;

export default RepositoryList;
