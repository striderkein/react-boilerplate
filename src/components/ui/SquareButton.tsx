import type { FC } from 'react'

type Props = {
  titleEn: string,
  titleJa: string,
  imagePath: string,
}

export const SquareButton: FC<Props> = (props) => {
  const { titleEn, titleJa, imagePath } = props

  return (
    <div className='square-button'>
      <div className="photo-frame">
        <img className='btn-bg' src={imagePath} alt={titleJa} />
      </div>
      <div className='title-en'>{titleEn}</div>
      <div className='title-ja'>{titleJa}</div>
    </div>
  )
}
