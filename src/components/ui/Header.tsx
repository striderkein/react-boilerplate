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
        <img src={navMyRecord} className="nav--my-record" alt="自分の記録" /><span className="nav-label">自分の記録</span>
        <img src={navChallenge} className="nav--challenge" alt="チャレンジ" /><span className="nav-label">チャレンジ</span>
        <img src={navInfo} className="nav--info" alt="お知らせ" /><span className="nav-label">お知らせ</span>
      </div>
      <div className="app-header__right">
        <img src={humbergerMenu} className="menu" alt="メニュー" />
      </div>
    </header>
  )
}
