import type { FC } from 'react'
import logo from '../../logo.svg'
import '../../index.css'

/*
export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
 */

export const Header: FC = () => {
  return (
    <header className='app-header'>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}
