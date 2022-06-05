/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import { FC } from 'react'

interface ButtonProps {
  handler: () => void,
  titleEn: string,
  titleJa: string,
  imagePath: string,
}

export const SquareButton: FC<ButtonProps> = (props) => {
  const { handler, titleEn, titleJa, imagePath } = props

  const onClick = () => {
    handler()
  }

  return (

    <div /* eslint-disable-line jsx-a11y/no-static-element-interactions */
      className='square-button' onClick={onClick}>
      <div className="photo-frame">
        <img className='btn-bg' src={imagePath} alt={titleJa} />
      </div>
      <div className='title-en'>{titleEn}</div>
      <div className='title-ja'>{titleJa}</div>
    </div>
  )
}
