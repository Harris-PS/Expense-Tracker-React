import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const ThemeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div className='theme-container'>
      <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.theme === 'Light Mode' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};
export default ThemeToggle;