import type { FC } from 'react'
import { DiaryItem } from 'components'
import { Diary } from 'types/Diary'

type Props = {
  diaries: Diary[],
}

export const MyDiary: FC<Props> = (props) => {
  const { diaries } = props

  return (
    <div className='my-diary ha-contents'>
      <header className='diary-header'><span className='diary-title'>MY DIARY</span></header>
      <main>
        <div className='my-diary-list'>
          {diaries.map((d: Diary) => {
            return <DiaryItem date={d.date} content={d.content} />
          })}
        </div>
      </main>
    </div>
  )
}
