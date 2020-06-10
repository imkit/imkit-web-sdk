# Modify Stickers

- Add pack of stickers to `static/sticker` sorted by folder name.
  - File name prefix must be the same as the folder name with `-`.
  - The file name in the folder must contain numbers, starting from 1, and must be continuous, such as sticker-1, sticker-2, and so on.
  - The file extension must be `png`.
- Modify `config.chat.sticker` of `static/config.js`
  - An object represents a folder
  - Folder: "FunFunFamily", // folder name
  - icon: "FunFunFamily-1", // represents the icon
  - count: 40 // Number of sticker pictures
