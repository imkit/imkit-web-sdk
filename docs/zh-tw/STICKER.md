# 修改 Sticker

- 圖包放入 `static/sticker` 以資料夾歸類
  - 檔名前綴必須與資料夾名稱相同並加上 `-`
  - 資料夾內圖片檔名必須包含數字，從 1 開始，不得中斷，例如 sticker-1, sticker-2, 依此類推
  - 副檔名必須是 `png`
- 修改 `static/config.js` 的 `config.chat.sticker`
  - 一個 Object 代表一個資料夾
  - folder: 'FunFunFamily', // 資料夾名稱
  - icon: 'FunFunFamily-1', // 代表 Icon
  - count: 40 // 圖片張數
