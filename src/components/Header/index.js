import PropTypes from 'prop-types';

import './header.scss';

function Header( {baseAmount, setBaseAmount} ) {
  const handleChange = (evt) => {
    setBaseAmount(evt.target.value);
  };

  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">
        <input
          className="header-amount-value"
          type="number"
          min="0"
          value={baseAmount.toString()}
          onChange={handleChange}
        />
        <span> euro(s)</span>
      </p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
}

export default Header; 
