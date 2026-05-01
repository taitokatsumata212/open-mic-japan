# /public/images/

このフォルダに オープンマイクジャパン サイトで使用する写真を配置します。

## ファイル名規則

`event-{location}-{number}.jpg` 形式

例：
- `event-soypoy-01.jpg`
- `event-utage-01.jpg`
- `event-workshop-01.jpg`

## 写真追加・差し替えの手順

1. ここに画像ファイルを配置（推奨：横幅 1600px 程度の JPG）
2. `src/data/gallery.ts` を編集
   - `src: null` を `src: "/images/event-soypoy-01.jpg"` に変更
   - 新規写真は配列に項目を追加
3. 許諾未取得の写真を外す場合は配列から削除、または `src: null` に戻す

## 優先選別

- ✅ 引きの全景（顔が小さい）
- ✅ 後ろ姿・シルエット
- ✅ 手元・楽器・マイクのアップ
- ✅ 会場の空気感
- ⚠️ 顔がはっきり写っている写真は許諾取得後に追加
