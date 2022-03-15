import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../custom-hooks/useStore';
import { arrayEquals, delay } from '../helpers';
import { actionTypeSuccess } from '../store/actions';
import Answer from './Answer';

function AnswersList() {
  const [selectValues, setSelectValues] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const { dispatch, currentStepData } = useStore();
  const navigate = useNavigate();

  const allAnswersIsSelected = selectValues.length === currentStepData.success.length;
  const toggleShowResult = () => setShowResult(!showResult);
  const clearData = () => {
    setSelectValues([]);
    toggleShowResult();
  };

  useEffect(() => {
    const nextStep = () => {
      if (arrayEquals(selectValues, currentStepData.success)) {
        return dispatch({ type: actionTypeSuccess });
      }
      return navigate('/finish');
    }
    const checkAnswers = async () => {
      if (allAnswersIsSelected) {
        await delay(500);
        toggleShowResult();
        await delay(500);
        nextStep();
        clearData();
      }
    };

    checkAnswers();

    return () => setShowResult(false);
  }, [selectValues.length]);

  const onChangeCheckbox = (item) => {
    const copySelectedValue = [...selectValues];

    if (copySelectedValue.includes(item)) {
      return setSelectValues(copySelectedValue.filter((el) => el !== item));
    }

    return setSelectValues(copySelectedValue.concat(item));
  };

  return (
    <div className="answers__wrapper">
      {currentStepData.answers.map((item, index) => {
        const getClassName = () => {
          const cls = [];

          if (currentStepData.success.includes(item)) {
            cls.push('answer--success');
          }

          if (
            selectValues.includes(item)
            && !currentStepData.success.includes(item)
          ) {
            cls.push('answer--error');
          }

          return showResult ? cls.join(' ') : '';
        };

        return (
          <Answer
            key={item}
            index={index}
            className={getClassName()}
            title={item}
            disabled={showResult}
            checked={selectValues.includes(item)}
            onChange={onChangeCheckbox}
          />
        );
      })}
    </div>
  );
}

export default AnswersList;
