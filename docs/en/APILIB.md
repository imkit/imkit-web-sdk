# IMKit JS APILib

## Install

```html
<script src="../demo/imkit-js-api-v3.min.js"></script>
<!-- if toolkit need to be supported in IE11，please include bluebird.js -->
<script src="//cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js"></script>
```

## User and Room

### Start

```javascript
var api = new IMKitApi({
  // chat server site
  domain: "https://chat.fangho.com",
  // chat server clientkey
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  // auth server site
  authBase: "https://auth.imkit.io"
});
```

#### Create/Update user and get token

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
    // Assign token to APILib, and subsequent actions will be performed by this user.
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

#### Add member to room (The performer must be a room member)

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
  // chat server site
  domain: "https://chat.fangho.com",
  // chat server clientkey
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  // auth server site
  authBase: "https://auth.imkit.io"
});

// Please see 'Create/Update user and get token' to get token and assign to APILib

var socket = new IMKitSocket({
  // chat server site
  domain: "https://chat.fangho.com",
  // token，please see 'Create/Update user and get token' to get
  token: "token",
  // implement when a new message is received
  onReceiveMessage: function(message) {
    checkBadge();
  },
  // implement when a new message is seen
  onReceiveRoom: function(room) {
    checkBadge();
  }
});
```

#### Get badge

```javascript
function checkBadge() {
  api.me.getBadge().then(function(data) {
    console.log("badge: " + data);
    // do something else
  });
}
```
