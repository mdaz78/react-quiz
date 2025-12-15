import React from 'react';
import Options from './Options';

const Question = ({ question, dispatch }) => {
  const { question: currentQuestion, options } = question;

  return (
    <div>
      <h4>{currentQuestion}</h4>
      <Options options={options} dispatch={dispatch} />
    </div>
  );
};

export default Question;
