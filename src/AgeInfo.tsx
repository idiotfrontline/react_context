type AgeInfoProps = {
  age: number
  addAge: () => void
}

export const AgeInfo = (props: AgeInfoProps) => {
  return (
    <div className="info">
      <h3>age: {props.age} </h3>
      <button>Happy Birthday!</button>
    </div>
  )
}
