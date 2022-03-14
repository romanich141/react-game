import React from 'react';
import useStore from '../custom-hooks/useStore';

function Question() {
  const { currentStepData } = useStore();

  return (
    <div>
      <h1 className="question__title">{currentStepData.question}</h1>
    </div>
  );
}

export default Question;
