import React from 'react';
import Header from './components/Header';
import Scores from './components/Scores';
import Statistic from './components/Statistic';
import { HTML_RESULTS, CSS_RESULTS } from './data'; // Import your data

const App = () => {
  return (
    <div>
      <Header batchName="Batch 101" />
      <main>
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Statistic courseResults={HTML_RESULTS} />
        <Scores courseName="CSS" courseResults={CSS_RESULTS} />
        <Statistic courseResults={CSS_RESULTS} />
      </main>
    </div>
  );
};

export default App;