const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  const handleRestart = () => dispatch({ type: 'restart' });

  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>

      <p className='highscore'>High Score: {highScore} Points</p>

      <button className='btn btn-ui' onClick={handleRestart}>
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
