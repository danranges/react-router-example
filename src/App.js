import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <h1>Hello from App</h1>
      <Link to={'profile'}>Profile</Link>
    </div>
  );
};

export default App;
