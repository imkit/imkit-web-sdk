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
let adminClientId = "gagu";
APILib.platform.sign(adminClientId).then(function(res) {
  let AdminTokenRes = res;
  let AdminToken = AdminTokenRes.token;
  APILib.auth.chatIn(AdminToken).then(function() {
    // do something else
  });
});
```

### 建立 chat user

```javascript
APILib.platform
  .updateClient(
    email, // email
    nickname, // 暱稱
    clientId, // 每個 chat user 具有唯一值 clientId，以識別身分，如果 clientId 已存在會 update user，不存在會 create user
    avatar // Image url
  )
  .then(function() {
    // do something else
  });
```

### 建立 chat room

```javascript
let room = {
  _id: "ID(string), 不可重複，可不傳，會隨機產生",
  name: "房間名稱",
  cover: "Image url",
  description: "房間描述"
};
let autoJoin = false; // 是否將管理者加入房間
APILib.room.createRoom(room, autoJoin).then(function(res) {
  let createRoomRes = res;
  room.id = createRoomRes.id; // 取得房間 id
});
```

### 將 chat user 加入 chat room

```javascript
if (room.id) {
  // 取得房間資訊
  APILib.room.searchOneRoom(room.id).then(function(res) {
    let roomInfo = res;
    // 檢查 chat user 是否已經在 chat room
    let find = null;
    for (let idx = 0; idx < roomInfo.members.length; idx++) {
      if (roomInfo.members[idx].id === clientId) {
        find = roomInfo.members[idx];
      }
    }

    // 如果沒有，加入房間
    if (!find) {
      // 方法一，管理者必須是房間成員
      APILib.room.addMember(room.id, clientId).then(function() {
        // do something else
      });

      // 方法二，chatIn 到 chat user 身分，執行 join
      APILib.platform.sign(clientId).then(function(res) {
        let tokenRes = res;
        let token = tokenRes.token;
        APILib.auth.chatIn(token).then(function() {
          APILib.room.joinRoom(room.id).then(function() {
            // do something else
          });
        });
      });
    }
  });
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
let clientId = "gagu";
APILib.platform.sign(clientId).then(function(res) {
  let tokenRes = res;
  let token = tokenRes.token;
  APILib.auth.chatIn(token).then(function() {
    // do something else
  });
});
```

### 取得 badge

```javascript
let clientId = "gagu";
let token = clientId;
APILib.platform.bindToken(clientId, token).then(function() {
  APILib.auth.chatIn(token).then(function() {
    // do something else
  });
});
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
let clientId = "gagu";
APILib.platform.sign(clientId).then(function(res) {
  let tokenRes = res;
  let token = tokenRes.token;
  // do something else
});
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

## 多人聊天

- 建立多個 chat user，並加入到同一個 room 中
- 建立多個 html，以不同的 clientId 做 get token 並開啟聊天室
- 使用多個瀏覽器或分頁開啟 html，即可測試多人聊天
