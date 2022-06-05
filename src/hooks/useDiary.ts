import { useCallback, useState } from 'react'
import { Diary } from 'types/Diary';

export const useDiary = () => {
  const [diaries, setDiaries] = useState<Diary[]>([])

  // 日記追加ロジック
  const addDiary = useCallback(
    (date: string, content: string) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newDiaries = [...diaries]
      // テキストボックスの入力内容をメモ配列に追加
      newDiaries.push({ date, content })
      setDiaries(newDiaries)
      // 依存配列に忘れずにdiariesを設定
    },
    [diaries]
  );

  // 日記削除ロジック
  const deleteDiary = useCallback(
    (index: number) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newDiaries = [...diaries]
      // メモ配列から該当の要素を削除
      newDiaries.splice(index, 1)
      setDiaries(newDiaries)
    },
    [diaries]
  )

  return { diaries, addDiary, deleteDiary }
};
