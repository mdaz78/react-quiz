import React from 'react';

const StartScreen = ({ numberOfQuestions, dispatch }) => {
  function onStartClick() {
    dispatch({ type: 'start' });
  }

  return (
    <div className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React Mastery</h3>
      <button className='btn btn-ui' onClick={onStartClick}>
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
