import { useState } from 'react'
import './App.css'
import Beer from './components/Beer'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Beer></Beer>
    </>
  )
}

export default App
