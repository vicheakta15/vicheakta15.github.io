import React from 'react';

const Statistic = ({ courseResults }) => {
  const scores = courseResults.map(result => result.score);
  const average =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div>
      <h3>Statistics</h3>
      <p>AVERAGE: {average}</p>
      <p>MIN: {min}</p>
      <p>MAX: {max}</p>
    </div>
  );
};

export default Statistic;