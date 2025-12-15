import React from 'react';

const Options = ({ options, dispatch }) => {
  const handleClick = (index) => () => {
    dispatch({ type: 'newAnswer', payload: index });
  };

  return (
    <div className='options'>
      {options.map((option, index) => (
        <button
          className='btn btn-option'
          key={option}
          onClick={handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
