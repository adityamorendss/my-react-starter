import { useState } from 'react'
import './App.css'
import Intro from "./Intro"
import PrintToConsole from "./PrintToConsole"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <PrintToConsole/>
    </>
  )
}

export default App
