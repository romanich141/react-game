import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';
import { addCurrrency, formatCurrency } from '../helpers';
import { useStore } from '../custom-hooks';

function ScoreList({ isReverseList, mobileMenu = false }) {
  const { store } = useStore();

  return (
    <div
      className={`score-list ${isReverseList ? 'score--reverse' : ''} ${
        mobileMenu ? 'score-list--show' : ''
      }`}
    >
      {store.data.map((step, index) => (
        <Score
          key={step.id}
          label={addCurrrency(formatCurrency(step.score))}
          scoreIndex={index}
        />
      ))}
    </div>
  );
}

ScoreList.defaultProps = {
  isReverseList: true,
}

ScoreList.propTypes = {
  isReverseList: PropTypes.bool,
  mobileMenu: PropTypes.bool.isRequired,
};

export default ScoreList;
