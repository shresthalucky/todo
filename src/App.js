import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './containers/Main/Main';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Main />
    </Router>
  );
}

export default App;
