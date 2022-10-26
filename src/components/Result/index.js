import PropTypes from 'prop-types';

import './result.scss';

function Result( {currency, value} ) {
  return (
    <footer className="result">
      <h1 className="result-title">{value}</h1>
      <p className="result-subtitle">{currency}</p>
    </footer>
  );
}

Result.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}

export default Result; 
