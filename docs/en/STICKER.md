# Modify stickers

- sticker pack add to `static/sticker` and sort by folder
  - File name prefix must be the same as the folder name with `-`
  - The file name in the folder must contain numbers, starting from 1, and must not be interrupted, such as insowe-1, insowe-2, and so on
  - The file name extension must be `png`
- Modify `config.chat.sticker` of `static/config.js`
  - An object represents a folder
  - Folder: "FunFunFamily", // folder name
  - icon: "FunFunFamily-1", // represents the icon
  - count: 40 // Number of pictures
