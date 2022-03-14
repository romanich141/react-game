import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore, useModal, useWindowResize } from '../../custom-hooks';
import AnswersList from '../AnswersList';
import Burger from '../Burger';
import Question from '../Question';
import ScoreList from '../ScoreList';

function Game() {
  const { store } = useStore();
  const navigate = useNavigate();

  const { sizes } = useWindowResize();
  const mobileMenu = useModal();

  useEffect(() => {
    if (store.isFinish) {
      navigate('/finish');
    }
  }, [navigate, store.isFinish]);

  if (store.isFinish) {
    return '';
  }

  const isMobile = sizes.width <= 768;

  return (
    <div className="layout">
      {isMobile && (
        <Burger onClick={mobileMenu.onToggle} isOpen={mobileMenu.isOpen} />
      )}
      <div className="question__wrapper">
        <Question />
        <AnswersList />
      </div>
      <ScoreList mobileMenu={mobileMenu.isOpen} />
    </div>
  );
}

export default Game;
