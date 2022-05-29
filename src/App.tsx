import React from 'react'
import { Graph, Header, Input } from 'components'
import './App.css'

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
      </header>
      */}
      <Header />
      {/* <body> */}
      <Input />
      {/* TODO: 下記のコンポーネントが必要 */}
      {/*
        <ButtonContainer />
        <BodyRecord />
        <MyExercise />
        <MyDiary />
        */}
      <Graph />
      {/* </body> */}
    </div>
  )
}

export default App
