import type { FC } from 'react'
import logo from '../../logo.svg'
import '../../index.css'

export const Header: FC = () => {
  return (
    <header className='app-header'>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}
