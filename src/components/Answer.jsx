import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../assets/images/answer.svg';
import { numeric } from '../helpers';

function Answer({
  title = '',
  checked = false,
  onChange = () => {},
  disabled = false,
  className = '',
  index = -1,
}) {
  return (
    <label className={`answer ${className}`}>
      <input
        className="input--checkbox visually-hidden"
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(title)}
      />
      <span className="answer__label">
        <span className="numeric__text">{numeric[index]}</span>
        {title}
      </span>
      <Logo className="answer__rectangle" />
    </label>
  );
}

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Answer;
