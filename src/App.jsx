import React from 'react';
import VansList from './components/VansList';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Listed Vans</h1>
      <VansList />
    </div>
  );
}

export default App;