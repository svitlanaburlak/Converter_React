import PropTypes from 'prop-types';

import Currency from './currency';
import './currencies.scss';

function Currencies( { currencies, handleCurrencyClick, searchValue, setSearch } ) {
  return (
    <div className="currency">
      <input 
        type="text" 
        className="currency-search"
        placeholder="Rechercher"
        value={searchValue}
        onChange={(ev) => {
          // console.log(ev.currentTarget.value);
          // need to pass by callback to execute this function just on click
          setSearch(ev.currentTarget.value);
        }}
      ></input>
      <ul>
        {
          currencies.map((currency) => (
            <Currency {...currency} key={currency.name}
              // we make function to act when currency is clicked
              handleCurrencyClick={handleCurrencyClick}
            />
          ))
        }
      </ul>
    </div>
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
  searchValue: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
