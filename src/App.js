import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const data = useSelector((state) => state);

  return (
    <div className="App">
      <Dashboard data={data} />
    </div>
  );
}

export default App;
