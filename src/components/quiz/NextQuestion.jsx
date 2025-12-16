import React from 'react';

function NextQuestion({ dispatch, answer, index, numberOfQuestions }) {
  if (answer === null) {
    return null;
  }

  const handleNextClick = () => dispatch({ type: 'nextQuestion' });
  const handleFinish = () => dispatch({ type: 'finished' });

  if (index < numberOfQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={handleNextClick}>
        Next
      </button>
    );
  }

  if (index === numberOfQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={handleFinish}>
        Finish
      </button>
    );
  }
}

export default NextQuestion;
