import PropTypes from 'prop-types';

import Currency from './currency';
import './currencies.scss';

function Currencies( { currencies } ) {
  return (
    <ul className="currency">
      {
        currencies.map((currency) => (
          <Currency {...currency} key={currency.name}/>
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
};

export default Currencies;