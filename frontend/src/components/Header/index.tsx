import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  backToDashboard?: boolean;
}

const Header: React.FC<HeaderProps> = ({ backToDashboard }) => (
  <Container>
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="GitHub Explorer"
          aria-label="GitHub Explorer"
          title="GitHub Explorer | Explore amazing repositories"
        />
      </Link>
      <Link to="/favorite-repos" className="menu-item">
        <FaHeart color="#f55" />
        Repositórios Favoritos
      </Link>
    </div>

    {backToDashboard && (
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    )}
  </Container>
);

export default Header;
