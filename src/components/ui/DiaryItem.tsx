import type { FC } from 'react'

type Props = {
  date: string,
  content: string,
}

export const DiaryItem: FC<Props> = (props) => {
  const { date, content } = props

  return (
    <li>
      <div className='diary-date'>{date}</div>
      <div className='diary-summary'>{content}</div>
      <div className='diary-content'>{content}</div>
    </li>
  )
}
