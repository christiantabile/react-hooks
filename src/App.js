import React, { useState } from 'react'


// Can only use hooks on function components, must be top level 'hook()'
// Cannot be nested in anything (if's, functions, loops, etc.)
function App() {

  const [count, setCount] = useState(() => {
    console.log('run function')
    return 4
  }) // Pass in default state, useState returns two values [currentState, updateState]

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
