import type { FC } from 'react'

type Props = {
  titleEn: string,
  titleJa: string,
  imagePath: string,
}

export const SquareButton: FC<Props> = (props) => {
  const { titleEn, titleJa, imagePath } = props;

  return (
    <div className='square-button'>
      <div>{titleEn}</div>
      <div>{titleJa}</div>
      <div>{imagePath}</div>
    </div>
  )
}
