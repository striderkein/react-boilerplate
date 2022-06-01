import React, { FC } from 'react'
import { Graph, Header, ButtonContainer, MyDiary, MyExercise } from 'components'
import './App.css'

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <ButtonContainer />
        <Graph />
        <MyExercise />
        <MyDiary />
      </div>
    </div>
  )
}
