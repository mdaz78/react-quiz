const FinishScreen = ({ points, maxPossiblePoints }) => {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  return (
    <p className='result'>
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {percentage}%)
    </p>
  );
};

export default FinishScreen;
