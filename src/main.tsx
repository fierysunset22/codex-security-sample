import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Codex Security Sample</h1>
      <p>A small React app for evaluating Codex Security.</p>
      <p><output aria-live="polite">Count: {count}</output></p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(0)}>Reset</button>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
