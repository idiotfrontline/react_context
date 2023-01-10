import { useContext } from "react"
import { InfoContext } from "./App"

type AgeInfoProps = {}

export const AgeInfo = (props: AgeInfoProps) => {
  const { age, addAge } = useContext(InfoContext)

  return (
    <div className="info">
      <h3>age: {age} </h3>
      <button onClick={addAge}>Happy Birthday!</button>
    </div>
  )
}
