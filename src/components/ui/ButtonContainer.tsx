import type { FC } from 'react'
// import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { SquareButton } from 'components'

export const ButtonContainer: FC = () => {
  return (
    // <BrowserRouter>
    <div className='button-cotainer'>
      {/* <SquareButton titleEn='BODY RECORD' titleJa='自分のカラダの記録' imagePath='./src/assets/images/btn-body-record.jpg' /> */}
      <SquareButton titleEn='BODY RECORD' titleJa='自分のカラダの記録' imagePath='/images/btn-body-record.jpg' />
      <SquareButton titleEn='MY EXERCISE' titleJa='自分の運動の記録' imagePath='/images/btn-my-exercise.jpg' />
      <SquareButton titleEn='MY DIARY' titleJa='自分の日記' imagePath='/images/btn-my-diary.jpg' />
      {/*
      <ul>
        <li>
          <NavLink to="/input">input</NavLink>
        </li>
        <li>
          <NavLink to="/graph">graph</NavLink>
        </li>
      </ul>
      */}
    </div>
    // <Switch>
    //   <Route exact path="/input">
    //     <Input />
    //   </Route>
    //   <Route exact path="/graph">
    //     <Graph />
    //   </Route>
    // </Switch>
    // </BrowserRouter>
  )
}
