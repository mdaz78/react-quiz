import React from 'react';

const Options = ({ question, dispatch, answer }) => {
  const { options, correctOption } = question;

  const handleClick = (index) => () => {
    dispatch({ type: 'newAnswer', payload: index });
  };

  const isAnswered = answer !== null;

  const getButtonClassName = (index) => {
    const classes = ['btn', 'btn-option'];

    if (index === answer) {
      classes.push('answer');
    }

    if (isAnswered) {
      classes.push(index === correctOption ? 'correct' : 'wrong');
    }

    return classes.join(' ');
  };

  return (
    <div className='options'>
      {options.map((option, index) => (
        <button
          className={getButtonClassName(index)}
          key={option}
          disabled={isAnswered}
          onClick={handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
