import { useState, createContext } from "react"
import { AgeInfo } from "./AgeInfo"
import "./App.css"

const initialValue = {
  age: 0,
  addAge: () => {},
}

export const InfoContext = createContext(initialValue)

function App() {
  const [age, setAge] = useState(18)
  const addAge = () => {
    setAge((prev) => prev + 1)
  }
  return (
    <InfoContext.Provider value={{ age, addAge }}>
      <div className="App">
        <h1>React Context Example</h1>
        <AgeInfo />
      </div>
    </InfoContext.Provider>
  )
}

export default App
