import type { FC } from 'react'
import { SquareButton } from 'components'

interface IButtonContainerProps {
  handler: () => void
}

export const ButtonContainer: FC<IButtonContainerProps> = (props) => {
  const { handler } = props

  return (
    <div className='button-container ha-contents'>
      <SquareButton handler={() => { console.log('NOT IMPLEMENTED') }} titleEn='BODY RECORD' titleJa='自分のカラダの記録' imagePath='/images/btn-body-record.jpg' />
      <SquareButton handler={() => { console.log('NOT IMPLEMENTED') }} titleEn='MY EXERCISE' titleJa='自分の運動の記録' imagePath='/images/btn-my-exercise.jpg' />
      <SquareButton handler={handler} titleEn='MY DIARY' titleJa='自分の日記' imagePath='/images/btn-my-diary.jpg' />
    </div>
  )
}
