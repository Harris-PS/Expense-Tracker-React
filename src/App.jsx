import ExpenseTracker from './ExpenseTracker.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {

  const { state } = useContext(ThemeContext);

  return (
    <div className={`app ${state.theme}`}>
      <ThemeToggle/>
      <ExpenseTracker/>
    </div>
  )
}

export default App
