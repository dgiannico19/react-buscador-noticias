import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
  return (
    <nav className="nav-wrapper #fdd835 yellow darken-1">
      <a href="#!" className="brand-logo center">
        {titulo}
      </a>
    </nav>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
