import type { FC } from 'react'
import { DiaryItem } from 'components'

interface Exercise {
  date: string,
  content: string,
}

export const MyDiary: FC = () => {
  // FIXME: get from state
  const data: Exercise[] = [
    { date: '2021-05-21 23:25:00+09:00', content: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
    { date: '2021-05-21 23:25:00+09:00', content: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
    { date: '2021-05-21 23:25:00+09:00', content: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
    { date: '2021-05-21 23:25:00+09:00', content: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
  ]

  return (
    <div className='my-diary ha-contents'>
      <header className='diary-header'><span className='diary-title'>MY DIARY</span></header>
      <main>
        <div className='my-diary-list'>
          {data.map((d) => {
            return <DiaryItem date={d.date} content={d.content} />
          })}
        </div>
      </main>
    </div>
  )
}
