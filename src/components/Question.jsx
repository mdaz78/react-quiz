import React from 'react';
import Options from './Options';

const Question = ({ question }) => {
  const { question: currentQuestion, options } = question;

  console.log({ currentQuestion, options });

  return (
    <div>
      <h4>{currentQuestion}</h4>
      <Options options={options} />
    </div>
  );
};

export default Question;
