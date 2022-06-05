/* eslint-disable react/jsx-props-no-spreading */
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import '../../index.css'

interface Props {
  // eslint-disable-next-line no-unused-vars
  handler: (date: string, content: string) => void,
}
type diaryInput = {
  date: string,
  content: string,
}

export const InputDiary: FC<Props> = (props) => {
  const { register, handleSubmit } = useForm<diaryInput>()
  const { handler } = props
  const onSubmit: SubmitHandler<diaryInput> = (data) => {
    console.log(data)
    // addDiary(data.date, data.content)
    handler(data.date, data.content)
  }

  return (
    <div className="input-diary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <label htmlFor="date">
              日付
              <input id="date" {...register('date')} />
            </label>
          </li>
          <li>
            <label htmlFor="content">
              内容
              <textarea id="content" {...register('content')} maxLength={100} />
            </label>
          </li>
        </ul>
        <button type="submit">登録</button>
      </form>
    </div>
  )
}
