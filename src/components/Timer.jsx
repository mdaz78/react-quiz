import { useEffect } from 'react';

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(secondsRemaining % 60)
    .toString()
    .padStart(2, '0');

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return <div className='timer'>{`${mins}:${seconds}`}</div>;
};

export default Timer;
