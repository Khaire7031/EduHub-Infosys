import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Beer from './Beer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App</h1>
      <Beer></Beer>
    </>
  )
}

export default App
