import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as OpenIcon } from '../assets/images/open.svg';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';

function Burger({ onClick = () => {}, isOpen = false }) {
  return (
    <button type="button" onClick={onClick} className="question__open-btn" aria-label="Open">
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </button>
  );
}

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Burger;
