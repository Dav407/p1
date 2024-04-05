import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/CounterSlice'

const Counter = () => {
    // Grabing the state
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
        <h1>Introduction to redux</h1>
        <h2>Counter: {count}</h2>
        <button onClick={() => (increment())}>Increment</button>
        <button onClick={() => (reset())}>Reset</button>
        <button onClick={() => (decrement())}>Decrement</button>
    </div>
  )
}

export default Counter