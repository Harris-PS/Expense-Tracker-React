import ExpenseTracker from './ExpenseTracker.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle/>
      <ExpenseTracker/>
    </div>
  )
}

export default App
