# IMKit Web SDK

## 管理 chat user 及 chat room

### Install

```html
<script type="text/javascript" src="static/js/app.js"></script>
```

### 建立 APILib

```javascript
const APILib = IMKC.getAPILib({
  url: "https://chat.fangho.com/", // chat server
  authUrl: "https://auth.fangho.com", // auth server
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  apiKey: "fangho_imkit_0412_2018_001_apikey"
});
```

### 登入管理者

```javascript
let adminClientId = 'gagu';
let AdminTokenRes = await APILib.platform.sign(adminClientId);
let AdminToken = AdminTokenRes.token;

await APILib.auth.chatIn(AdminToken);
```

### 建立 chat user

```javascript
await APILib.platform.updateClient(
    email, // email
    nickname, // 暱稱
    clientId, // 如果 ID 已存在會 update，不存在會 create
    avatar // Image url
);
```

### 建立 chat room

```javascript
let room = {
    _id: 'ID(string), 不可重複，可不傳，會隨機產生',
    name: '房間名稱',
    cover: 'Image url',
    description: '房間描述'
}
let autoJoin = false; // 是否將管理者加入房間
let createRoomRes = await APILib.room.createRoom(room, autoJoin);

room.id = createRoomRes.id; //取得房間 id
```

### 將 chat user 加入 chat room

```javascript
if (room.id) {
    // 取得房間資訊
    let roomInfo = await APILib.room.searchOneRoom(room.id);

    // 檢查 chat user 是否已經在 chat room
    let find = roomInfo.members.find(member => {
        return member.id === clientId;
    });
    // 如果沒有，加入房間
    if (!find) {
        // 方法一，管理者必須是房間成員
        await APILib.room.addMember(room.id, clientId);
        // 方法二，chatIn 到 chat user 身分，執行 join
        let tokenRes = await APILib.platform.sign(clientId);
        let token = tokenRes.token;

        await APILib.auth.chatIn(token);
        await APILib.room.joinRoom(room.id);
    }
}
```

## 即時取得 char user 的 badge

### Install

```html
<script type="text/javascript" src="static/js/app.js"></script>
```

### 建立 APILib

```javascript
const APILib = IMKC.getAPILib({
  url: "https://chat.fangho.com/", // chat server
  authUrl: "https://auth.fangho.com", // auth server
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  // 收到新訊息時執行
  receiveMsg: function(msg) {
    checkBadge();
  },
  // 已讀時執行
  receiveRoom: function(msg) {
    checkBadge();
  }
});
```

### 登入 char user

```javascript
let clientId = 'gagu';
let tokenRes = await APILib.platform.sign(clientId);
let token = tokenRes.token;

await APILib.auth.chatIn(token);
```

### 取得 badge

```javascript
async function checkBadge() {
  let res = await APILib.me.getBadge();
  console.log(res.badge);
}
```

## 開啟聊天室

### Install

```html
<head>
  <link rel="manifest" href="static/manifest.json">
  <link href="static/css/custom.css" rel="stylesheet">
  <link href="static/css/app.css" rel="stylesheet">
</head>

<body>
  <div id="imkc"></div>
  <script type="text/javascript" src="static/js/app.js"></script>
</body>
```

### 建立 APILib

```javascript
const APILib = IMKC.getAPILib({
  url: "https://chat.fangho.com/", // chat server
  authUrl: "https://auth.fangho.com" // auth server
});
```

### Get user token

```javascript
let clientId = 'gagu';
let tokenRes = await APILib.platform.sign(clientId);
let token = tokenRes.token;
```

### 開啟聊天室

```javascript
const imkit = IMKC.init({
  debug: false,
  lang: "tw", // 'en' or 'tw'
  url: "https://chat.fangho.com/", // chat server url
  room: {
    id: room.id // 預設房間 ID，可傳 null，會進入列表第一個房間
  },
  domain: "", // 聊天室頁面 url
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  authToken: token,
  bucketName: "chatserver-upload", // S3 bucketName
  googleApiKey: "AIzaSyCimtHXyW8GfZ50Vx_YcFFmaBu7G2Wm2cw", // need google map
  rightPage: null,
  // rightPage: {
  //   url: "/static/right.html",
  //   query: {
  //     roomId: "rid"
  //   }
  // }, // use custom page replace default info UI (/static/right.html?rid=${roomId})
  useReply: false, // 開啟回覆功能
  skins: ["default"],
  skin: "default",
  pictureViewModel: "rich", // simple or rich
  maxUploadFileSize: 2, // (MB)
  layout: {
    list: true,
    info: true
  },
  listSetting: {
    showMemberCount: false // 列表是否顯示房間人數
  },
  supportMsgType: {
    // 可移除不需要的功能
    emoji: "傳送表情符號",
    sticker: "傳送貼圖",
    image: "傳送圖片",
    audio: "傳送音頻",
    video: "傳送影片",
    location: "傳送位置"
  },
  actionIconPos: "right", // right, bottom
  supportMsgInfo: {
    readReceipt: true // 是否顯示已讀
  },
  runForMobileDevice: false,
  showJoinMessage: false, // 是否顯示加入房間的訊息
  showTodayMessage: false, // 是否顯示 today 標籤
  showInfoEdit: false, // 是否可以編輯房間名稱及移除房間成員
  messageColor: {
    // 自己發出的訊息顏色
    background: "#5CB8B2",
    color: "#FFF"
  },
  useNotification: true, // 是否啟用推播
  urlPreviewApi: "https://chatkit.co/url", // url 預覽 API
  appName: "IMKit Demo",
  firebaseConfig: {
    apiKey: "AIzaSyDH6fgpRFaH7vIqAcGQi48wgvNf8BJ9q1I",
    authDomain: "fir-chat-server.firebaseapp.com",
    databaseURL: "https://fir-chat-server.firebaseio.com",
    projectId: "fir-chat-server",
    storageBucket: "fir-chat-server.appspot.com",
    messagingSenderId: "970263218499"
  }
});
```
