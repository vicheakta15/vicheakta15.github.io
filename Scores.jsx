import React from 'react';

const Scores = ({ courseName, courseResults }) => {
  return (
    <div>
      <h2>{courseName}</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td className={result.score < 50 ? 'warning' : ''}>
                {result.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scores;