import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};
export default ThemeToggle;