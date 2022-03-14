import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../assets/images/rectangle.svg';
import { useStore } from '../custom-hooks';

function Score({ label = '', scoreIndex = -1 }) {
  const { store } = useStore();
  const isActive = scoreIndex === store.activeStep ? 'score--active' : '';
  const isComplete = scoreIndex < store.activeStep ? 'score--complete' : '';

  return (
    <div className={`score ${isActive} ${isComplete}`}>
      <span className="score__label">{label}</span>
      <Logo className="score__rectangle" />
    </div>
  );
}

Score.propTypes = {
  scoreIndex: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Score;
