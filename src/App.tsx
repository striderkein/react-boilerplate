import React, { FC } from 'react'
import { Graph, Header, ButtonContainer, MyExercise } from 'components'
import './App.css'

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <ButtonContainer />
      <Graph />
      <MyExercise />
      <div>MyDiary</div>
    </div>
  )
}
