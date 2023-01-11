import { useState, createContext } from "react"
import { AgeInfo } from "./AgeInfo"
import "./App.css"
import { SavingInfo } from "./SavingInfo"

const initialValue = {
  age: 0,
  addAge: () => {},

  saving: 0,
  addSaving: () => {},
}

export const InfoContext = createContext(initialValue)

function App() {
  const [age, setAge] = useState(18)

  const addAge = () => {
    setAge((prev) => prev + 1)
  }

  const [saving, setSaving] = useState(1000)

  const addSaving = () => {
    setSaving((prev) => prev + 1000)
  }

  return (
    <InfoContext.Provider value={{ age, addAge, saving, addSaving }}>
      <div className="App">
        <h1>React Context Example</h1>
        <AgeInfo />
        <SavingInfo />
      </div>
    </InfoContext.Provider>
  )
}

export default App
