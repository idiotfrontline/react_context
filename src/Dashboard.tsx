import { useState } from "react"
import { AgeInfo } from "./AgeInfo"
import "./App.css"
type DashboardProps = {}

export const Dashboard = (props: DashboardProps) => {
  const [age, setAge] = useState(18)
  const addAge = () => {
    setAge((prev) => prev + 1)
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <AgeInfo age={age} addAge={addAge} />
    </div>
  )
}
