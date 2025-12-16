import React from 'react';

function NextQuestion({ dispatch, answer }) {
  if (answer === null) {
    return null;
  }

  const handleNextClick = () => dispatch({ type: 'nextQuestion' });

  return (
    <button className='btn btn-ui' onClick={handleNextClick}>
      Next
    </button>
  );
}

export default NextQuestion;
