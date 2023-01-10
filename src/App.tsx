import { useState } from "react"
import { AgeInfo } from "./AgeInfo"
import "./App.css"

function App() {
  const [age, setAge] = useState(18)
  const addAge = () => {
    setAge((prev) => prev + 1)
  }
  return (
    <div className="App">
      <h1>React Context Example</h1>
      <AgeInfo age={age} addAge={addAge} />
    </div>
  )
}

export default App
