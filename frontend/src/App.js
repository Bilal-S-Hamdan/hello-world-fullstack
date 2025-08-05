import { useEffect, useState, useCallback } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const fetchMessage = useCallback(async () => {
    try {
      const response = await fetch('/message');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setMessage(data.text);
    } catch (err) {
      setError('Failed to fetch message');
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchMessage();
  }, [fetchMessage]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {error ? (
        <h1 style={{ color: 'red' }}>{error}</h1>
      ) : (
        <h1>{message || 'Loading...'}</h1>
      )}
    </div>
  );
}

export default App;
