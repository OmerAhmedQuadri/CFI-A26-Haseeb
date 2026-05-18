import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      flexDirection: "column",
      backgroundColor: "navy"
    }}>
    <h1>Counter: {count}</h1>
    <div style={{
      display: "flex",
      gap: "4px"
    }}>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(Math.max(0, count - 1))}>Decrement</button>
    </div>
    </div>
  )
}

export default App