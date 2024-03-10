import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    // Verificar la preferencia de color del sistema
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Activar el modo oscuro si es la preferencia del sistema
    if (prefersDarkMode) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <button onClick={toggleDarkMode}>
         {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;