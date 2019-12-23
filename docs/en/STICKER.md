# Modify stickers

- sticker pack add to `static / sticker` and sort by folder
  - The file name in the folder must contain numbers, starting from 1, and must not be interrupted, such as insowe-1.png, insowe-2.png, and so on
  - In the same folder, the file name extension must be the same
- Modify `config.chat.sticker` of `static/config.js`
  - An object represents a folder
  - Folder: "funfunfamily", // folder name
  - icon: "FunFunFamily-1.png", // represents the icon
  - prefix: "FunFunFamily-", // file name prefix
  - suffix: ".png", // file name suffix (including the file name extension)
  - count: 40 // Number of pictures
