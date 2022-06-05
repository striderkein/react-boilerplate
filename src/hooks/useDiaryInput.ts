import { useCallback, useState } from 'react'
// import React, { useCallback, useState } from 'react'

export const useDiaryInput = (initiaiState: boolean) => {
  const [inputDiary, setInputDiary] = useState<boolean>(initiaiState)
  // const isToggleRef = React.useRef(inputDiary)

  // const toggleDiaryInput = () => (
  const toggleDiaryInput = useCallback(() => {
    setInputDiary(b => !b)
    // setInputDiary(!isToggleRef.current)
  }, [inputDiary])
  // }, [isToggleRef, setInputDiary])

  return { inputDiary, toggleDiaryInput }
}
