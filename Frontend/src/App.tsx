import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Contador</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      </header>
    </div>
  )
}

export default App
