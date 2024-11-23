import React from 'react';
import Envelope from './components/Envelope';
import Bubble from './components/Bubble';

function App() {
  const bubbles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 1
  }));

  return (
    <div className="relative min-h-screen bg-pink-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200">
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Envelope />
      </div>
    </div>
  );
}

export default App;