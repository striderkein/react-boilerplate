import type { FC } from 'react'
// import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Graph, Input } from 'components'

/*
export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
 */

export const ButtonContainer: FC = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/input">input</NavLink>
        </li>
        <li>
          <NavLink to="/graph">graph</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/input">
          <Input />
        </Route>
        <Route exact path="/graph">
          <Graph />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
