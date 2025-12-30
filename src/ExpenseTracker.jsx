import {useState, useReducer, useMemo , useRef} from "react";
import useInput from "./useInput";

const ACTIONS = {
  ADD : 'add',
  DELETE : 'delete'
}

function expenseReducer(state, action){
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];

    case ACTIONS.DELETE:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }

}



function ExpenseTracker() {
  const title = useInput("");
  const amount = useInput("");
  const inputRef = useRef();
  const [error, setError] = useState("");
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  const total = useMemo(() => {
    return expenses.reduce((sum, item) => sum + item.amount, 0);
  }, [expenses]);

  const handleAdd = () => {
    if (!title.value || !amount.value || amount.value <= 0) {
      setError("Please enter valid data");
      return;
    }

    dispatch({
      type: ACTIONS.ADD,
      payload: {
        id: Date.now(),
        title: title.value,
        amount: Number(amount.value)
      }
    });

    title.setValue("");
    amount.setValue("");
    setError("");
    inputRef.current.focus();
  };

  return(
    <div className="container">

      <div className="container-1">
        <h1>Expense Tracker</h1>
        <input className="title-input" ref= {inputRef} placeholder="Title" {...title} />
        <input className="amount-input" type="number" placeholder="Amount" {...amount}/>
        <button className="add-btn" onClick= {handleAdd}>Add</button>
        {error && <p className="error-msg">{error}</p>}
      </div>


      <div className="container-2">
        <ul>
          {expenses.map(item => (
            <li key={item.id}>
              {item.title} - ${item.amount}
              <button className="delete-btn" onClick={() => dispatch({ type: ACTIONS.DELETE, payload: item.id })}>
                Delete
              </button>
            </li>
          ))}        
        </ul>
        <p>Total Expense: ${total}</p>
      </div>

    </div>

  )

}

export default ExpenseTracker