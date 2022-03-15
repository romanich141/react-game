import React from 'react';
import { Link } from 'react-router-dom';
import { actionTypeReset } from '../../store/actions';
import { ReactComponent as Hand } from '../../assets/images/hand.svg';
import { addCurrrency, formatCurrency } from '../../helpers';
import useStore from '../../custom-hooks/useStore';

function FinishGame() {
  const { dispatch, store } = useStore();

  return (
    <div className="finish">
      <Hand className="logo" />
      <div>
        <div className="finish__title">Total score:</div>
        <div className="title">{`${addCurrrency(formatCurrency(store.score))} earned`}</div>
        <Link
          className="btn btn--orange"
          to="/"
          onClick={() => {
            dispatch({ type: actionTypeReset });
          }}
        >
          Try again
        </Link>
      </div>
    </div>
  );
}

export default FinishGame;
