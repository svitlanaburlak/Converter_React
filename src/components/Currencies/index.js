import PropTypes from 'prop-types';

import Currency from './currency';
import './currencies.scss';

function Currencies( { currencies, handleCurrencyClick } ) {
  return (
    <ul className="currency">
      {
        currencies.map((currency) => (
          <Currency {...currency} key={currency.name}
            // we make function to act when currency is clicked
            handleCurrencyClick={handleCurrencyClick}
          />
        ))
      }
    </ul>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    // we precise the structure of our object
    PropTypes.shape({
      rate: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
  handleCurrencyClick: PropTypes.func.isRequired,
};

export default Currencies;
