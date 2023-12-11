import React, { useState } from 'react';
import WithUseCallback from './WithUseCallback';
import WithoutUseCallback from './WithoutUseCallback';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <WithUseCallback />
      <WithoutUseCallback />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
