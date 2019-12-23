# Modify stickers

- sticker pack add to `static / sticker` and sort by folder
  - The stickers in the folder must be named with a number, starting from 1, and must not be interrupted
  - In the same folder, the file name extension must be the same
- Modify `config.chat.sticker` of `static/config.js`
  - An object represents a folder
  - Folder: "funfunfamily", // folder name
  - icon: "FunFunFamily-1.png", // represents the icon
  - prefix: "FunFunFamily-", // file name prefix
  - suffix: ".png", // file name suffix (including the file name extension)
  - count: 40 // Number of pictures