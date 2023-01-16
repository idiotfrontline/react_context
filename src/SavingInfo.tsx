import { useInfoContext } from "./MyContextProvider"

type SavingInfoProps = {}

export const SavingInfo = (props: SavingInfoProps) => {
  const { saving, addSaving } = useInfoContext()

  return (
    <div className="info">
      <h3>Saving: {saving}</h3>
      <button onClick={addSaving}>Add Saving</button>
    </div>
  )
}
