import styled from 'styled-components';
import { shade } from 'polished';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 210px;
  height: 70px;
  background: ${({ theme }) => theme.colors.gray};
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.gray)};
  }
`;

export default Button;
