import PropTypes from 'prop-types';

import './header.scss';

function Header( {baseAmount} ) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-subtitle">{ baseAmount } euro</p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
}

export default Header; 
