import type { FC } from 'react'
import { ExerciseItem } from 'components'

interface Exercise {
  type: string,
  duration: number,
  calory: number,
}

export const MyExercise: FC = () => {
  const data: Exercise[] = [
    { type: '家事全般', duration: 10, calory: 16 },
    { type: '家事全般', duration: 20, calory: 26 },
    { type: '家事全般', duration: 30, calory: 36 },
    { type: '家事全般', duration: 40, calory: 46 },
  ]

  return (
    <div className='my-exercise ha-contents'>
      <header className='exercise-header'><span className='exercise-title'>MY EXERCISE</span><span className='exercise-date'>2021.05.21</span></header>
      <main>
        <ul className='my-exercise-list'>
          {data.map((d) => {
            return <ExerciseItem type={d.type} duration={d.duration} calory={d.calory} />
          })}
        </ul>
      </main>
    </div>
  )
}
