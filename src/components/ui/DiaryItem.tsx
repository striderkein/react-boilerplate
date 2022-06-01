import type { FC } from 'react'
import dayjs from 'dayjs';

type Props = {
  date: string,
  content: string,
}

const DATE_FORMAT = 'YYYY.MM.DD HH:mm'

export const DiaryItem: FC<Props> = (props) => {
  const { date, content } = props

  return (
    <div className="diary-item">
      <div className='diary-date'>{dayjs(date).format(DATE_FORMAT)}</div>
      <div className='diary-summary'>{content}</div>
      <div className='diary-content'>{content}</div>
    </div>
  )
}
