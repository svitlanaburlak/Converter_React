import PropTypes from 'prop-types';

import './toggler.scss';

function Toggler({ open, manageClick }) {
  const cssClass = open ? 'toggle toggle--open' : 'toggle';

  return (
    <button 
      type="button" 
      className={cssClass}
      onClick={manageClick}
    >
      =
    </button>
  );
}

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
}

export default Toggler;
