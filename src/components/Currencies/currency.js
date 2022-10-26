import PropTypes from 'prop-types';

function Currency({
  name,
  rate,
}) {
  return (
    <li className="currency-item">{name}</li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}

export default Currency;
