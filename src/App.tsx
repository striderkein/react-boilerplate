import React, { FC } from 'react'
import { Graph, Header, ButtonContainer } from 'components'
import './App.css'

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <ButtonContainer />
      {/* <BodyRecord /> */}<Graph />
      {/* <MyExercise /> */}<div>MyExercise</div>
      {/* <MyDiary /> */}<div>MyDiary</div>
    </div>
  )
}
