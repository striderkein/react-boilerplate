// import { ChangeEvent, useState, FC, useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import '../../index.css'

/*
export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
 */

export const Input: FC = () => {
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
    </div>
  )
}
