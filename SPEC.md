# health-app
## 画面
`*` マーク付きの画面はログイン不要
- home（ネーミング要検討） *
- トップ
- 自分の記録
  - 「自分のカラダの記録」入力
  - 「自分の運動の記録」入力
  - 「自分の日記」入力
- コラム *

### home
ログイン不要。
#### 構成要素
- ロゴ
- ログインフォーム
#### ロゴ
「Healthy」サービスのロゴ
#### ログインフォーム
~~Cognito ユーザプールトークンを localStorage に格納する。~~ → Amplify 使用
##### 入力項目
- name: string
- email: string
- password: string

### トップ
#### 構成要素
- 日付・達成率
- 体重・体脂肪率
- 入力ボタン
- 食事履歴

##### 日付・達成率
##### 体重・体脂肪率
##### 入力ボタン
##### 食事履歴

### 自分の記録
#### 構成要素
- 各記録画面に遷移するボタン
- body record
- my exercise
- my diary

#### 各記録画面に遷移するボタン
（割愛）
#### body record
自分のカラダの記録
体重・体脂肪率グラフを表示する

#### my exercise
自分の運動の記録
表形式で下記項目を表示する
- 運動種類
- 運動時間(分)
- 消費カロリー(kcal)

#### my diary
自分の日記
1記事あたり最大 MAX 文字で日記を表示する

### 「自分のカラダの記録」入力
#### 入力項目
- 月: string
- 目標体重: number
- 実際の体重: number

### 「自分の運動の記録」入力
#### 入力項目
- 運動種類: string
- 運動時間(分): number
- 消費カロリー(kcal): number

### 「自分の日記」入力
#### 入力項目
- タイトル: string
- 文面: string

### column

## アーキテクチャ
認証基盤に Amplify + Cognito を使用。
API は API Gateway -> Lambda -> DynamoDB
API レスポンスはステートフックを使用して state に格納。
useEffect で再描画する。
