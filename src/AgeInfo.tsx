import { useInfoContext } from "./MyContextProvider"

type AgeInfoProps = {}

export const AgeInfo = (props: AgeInfoProps) => {
  const { age, addAge } = useInfoContext()

  return (
    <div className="info">
      <h3>age: {age} </h3>
      <button onClick={addAge}>Happy Birthday!</button>
    </div>
  )
}
