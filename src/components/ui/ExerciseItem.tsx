import type { FC } from 'react'

type Props = {
  type: string,
  duration: number,
  calory: number,
}

export const ExerciseItem: FC<Props> = (props) => {
  const { type, duration, calory } = props

  return (
    <li>
      <span className='exercise-type'>{type}</span><span className='exercise-duration'>{duration} min</span>
      <div className='exercise-calory'>{calory} kcal</div>
    </li>
  )
}
