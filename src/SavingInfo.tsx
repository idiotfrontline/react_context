import { useContext } from "react"
import { InfoContext } from "./App"

type SavingInfoProps = {}

export const SavingInfo = (props: SavingInfoProps) => {
  const { saving, addSaving } = useContext(InfoContext)

  return (
    <div className="info">
      <h3>Saving: {saving}</h3>
      <button onClick={addSaving}>Add Saving</button>
    </div>
  )
}
