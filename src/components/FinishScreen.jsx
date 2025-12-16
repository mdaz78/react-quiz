const FinishScreen = ({ points, maxPossiblePoints, highScore }) => {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>

      <p className='highscore'>High Score: {highScore} Points</p>
    </>
  );
};

export default FinishScreen;
