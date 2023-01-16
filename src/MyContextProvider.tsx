import { createContext, useContext, useState } from "react"

const initialValue = {
  age: 0,
  addAge: () => {},

  saving: 0,
  addSaving: () => {},
}

export const InfoContext = createContext(initialValue)

export const useInfoContext = () => {
  return useContext(InfoContext)
}

type MyContextProviderProps = {
  children: React.ReactNode
}

export const MyContextProvider = (props: MyContextProviderProps) => {
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
      {props.children}
    </InfoContext.Provider>
  )
}
