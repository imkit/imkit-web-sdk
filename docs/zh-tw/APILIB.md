# IMKit JS APILib

## Install

```html
<script src="../demo/imkit-js-api-v3.min.js"></script>
<!-- 如果要支援 IE11，需要額外加載 bluebird.js -->
<script src="//cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js"></script>
```

## User and Room

### Start

```javascript
var api = new IMKitApi({
  // chat server 位置
  domain: "https://chat.fangho.com",
  // chat server clientkey
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  // auth server 位置
  authBase: "https://auth.imkit.io"
});
```

#### Create/Update user and get token (待刪)

```javascript
var clientID = "DemoUser";
api.auth
  .sign({
    // user id
    id: clientID,
    // 暱稱 [Optional]
    nickname: clientID
    // 圖片 [Optional]
    // avatarUrl: 'http://...'
  })
  .then(function(data) {
    // 將 token 指派給 APILib，後續動作將會以此 user 身分執行
    api.config.token = data.token;
    // do something else
  });
```

#### Create room

```javascript
var roomID = "DemoRoom";
api.room
  .createRoom({
    // room id
    _id: roomID,
    // room name [Optional]
    name: roomID
    // room description [Optional]
    // description: ''
    // room cover [Optional]
    // cover: 'http://...'
  })
  .then(function(data) {
    // do something else
  });
```

#### Join room

```javascript
var roomID = "DemoRoom";
api.room.joinRoom(roomID).then(function(data) {
  // do something else
});
```

#### Add member to room (執行者必須是房間成員)

```javascript
var roomID = "DemoRoom";
var memberID = "NewUser";
api.room.addMember(roomID, memberID).then(function(data) {
  // do something else
});
```

## Badge

### Start

```javascript
var api = new IMKitApi({
  // chat server 位置
  domain: "https://chat.fangho.com",
  // chat server clientkey
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  // auth server 位置
  authBase: "https://auth.imkit.io"
});

// 參閱 'Create/Update user and get token' 取得 token 並指派給 APILib

var socket = new IMKitSocket({
  // chat server 位置
  domain: "https://chat.fangho.com",
  // token，參閱 'Create/Update user and get token' 取得
  token: "token",
  // 收到新訊息時執行
  onReceiveMessage: function(message) {
    checkBadge();
  },
  // 已讀時執行
  onReceiveRoom: function(room) {
    checkBadge();
  }
});
```

#### 取得 badge

```javascript
function checkBadge() {
  api.me.getBadge().then(function(data) {
    console.log("badge: " + data);
    // do something else
  });
}
```
