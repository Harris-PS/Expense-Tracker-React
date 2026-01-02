import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const ThemeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext);
  return (
      <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
  );
};
export default ThemeToggle;