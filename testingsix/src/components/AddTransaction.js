import React, {useState, useContext} from 'react';
import { Globalcontext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(Globalcontext);

  const onSubmit = e => {
    e.preventDefault();
  

   const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount : +amount
  }

  addTransaction(newTransaction);
  }

  return (
    <>
        
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div classNameNameName="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div classNameNameName="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button classNameNameName="btn">Add transaction</button>
      </form>
    </>

  )
}
