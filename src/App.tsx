import React, { FC } from 'react'
import { Header, ButtonContainer } from 'components'
import './App.css'

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <ButtonContainer />
      {/* <BodyRecord /> */}<div>BodyRecord</div>
      {/* <MyExercise /> */}<div>MyExercise</div>
      {/* <MyDiary /> */}<div>MyDiary</div>
    </div>
  )
}
