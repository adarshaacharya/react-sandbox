import React from 'react';

const calculatePercentage = (player, wordsLength) => {
  if (player.currentWordIndex !== 0) {
    return ((player.currentWordIndex / wordsLength) * 100).toFixed(2) + '%';
  }
};

const ProgressBar = ({ players, player, wordsLength }) => {
  const percentage = calulatePercentage(player, wordsLength);
  return (
    <>
      {
        <>
          <h5 className="text-left">{player.nickName}</h5>
          <div className="progress my-1" key={player._id}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: percentage }}
            >
              {percentage}
            </div>
          </div>
        </>
      }
    </>
  );
};

export default ProgressBar;
