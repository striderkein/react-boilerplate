import React, { FC } from 'react'
import { Graph, Header, ButtonContainer } from 'components'
import './App.css'

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <ButtonContainer />
      <Graph />
      <div>MyExercise</div>
      <div>MyDiary</div>
    </div>
  )
}
