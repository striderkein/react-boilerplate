import React, { FC } from 'react'
import { Graph, Header, InputDiary, ButtonContainer, MyDiary, MyExercise, Footer } from 'components'
import './App.css'
import { useDiary } from 'hooks/useDiary'
import { useDiaryInput } from 'hooks/useDiaryInput'

export const App: FC = () => {
  const { diaries, addDiary } = useDiary();
  const { inputDiary, toggleDiaryInput } = useDiaryInput(false)

  return (
    <div className="App">
      <Header />
      <div className="contents">
        <ButtonContainer handler={toggleDiaryInput} />
        {inputDiary && <InputDiary handler={addDiary} />}
        <Graph />
        <MyExercise />
        <MyDiary key={Date.now()} diaries={diaries} />
      </div>
      <Footer />
    </div>
  )
}
