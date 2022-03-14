import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Hand } from '../../assets/images/hand.svg';

function Welcome() {
  return (
    <div className="welcome">
      <Hand className="logo" />
      <div>
        <div className="title">Who wants to be a millionaire?</div>
        <Link className="btn btn--orange" to="/game">
          Start game
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
