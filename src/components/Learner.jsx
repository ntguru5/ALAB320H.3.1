import React from 'react';
import Score from './Score';

function Learner({ data }) {
  return (
    <div className="learner">
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
      <div className="scores">
        {data.scores.map((score, index) => (
          <Score key={index} date={score.date} score={score.score} />
        ))}
      </div>
    </div>
  );
}

export default Learner;
