import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching backend:', error));
  }, []);

  return (
    <div className="App">
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default App;