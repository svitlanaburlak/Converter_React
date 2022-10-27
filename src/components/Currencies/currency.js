import PropTypes from 'prop-types';

function Currency({
  name,
  rate,
  handleCurrencyClick
}) {
  return (
    <li 
      className="currency-item"
      // anonyme function makes it exeecute just when clicked not when read 
      onClick={() => {
        handleCurrencyClick(name)}
      }
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  handleCurrencyClick: PropTypes.func.isRequired,
}

export default Currency;
