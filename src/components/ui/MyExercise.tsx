import type { FC } from 'react'
// import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { SquareButton } from 'components'
// import bgBodyRecord from '/images/btn-body-record.jpg'

export const MyExercise: FC = () => {
  return (
    // <BrowserRouter>
    <div className='my-exercise'>
      my exercise
      <ul className='my-exercise-list'>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
      </ul>
    </div>
  )
}
