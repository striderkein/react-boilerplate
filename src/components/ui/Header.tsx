import type { FC } from 'react'
import logo from '../../logo.svg'
import navMyRecord from '../../nav-my-record.svg'
import navChallenge from '../../nav-challenge.svg'
import navInfo from '../../nav-info.svg'
import humbergerMenu from '../../icon-humberger.svg'
import '../../index.css'

export const Header: FC = () => {
  return (
    <header className='app-header'>
      <div className="app-header__left">
        <img src={logo} className="App-logo" alt="Healthyロゴ" />
      </div>
      <div className="app-header__middle">
        <img src={navMyRecord} className="nav--my-record" alt="自分の記録" />
        <img src={navChallenge} className="nav--challenge" alt="チャレンジ" />
        <img src={navInfo} className="nav--info" alt="お知らせ" />
      </div>
      <div className="app-header__right">
        <img src={humbergerMenu} className="menu" alt="メニュー" />
      </div>
    </header>
  )
}
