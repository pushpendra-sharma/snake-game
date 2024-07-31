import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CanvasBoard } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <CanvasBoard height='300' width='300'/>
    </div>
  )
}

export default App
