# IMKit 客服服務 (JavaScript)

## 事前

### Google api key

如果要使用地圖位置服務功能，需先申請 Google api key
https://developers.google.com/maps/documentation/embed/get-api-key

需開通權限：
Maps JavaScript API, Maps Static API, Geocoding API

## 建立客服

### 產生 key

https://imkit.github.io/imkit-js-lib/class/src/api/index.js~IMKitApi.html#instance-method-generateRsaKey

example:

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
<script>
  let api = new IMKitApi({});

  let keypair = await api.generateRsaKey();
  console.log(keypair.publicKey);
  console.log(keypair.privateKey);
</script>
```

`publicKey` 在 sign 時會用到

`privateKey` 請妥善保存到資料庫

### sign

https://imkit.github.io/imkit-js-lib/class/src/api/auth/index.js~Auth.html#instance-method-sign

example:

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
<script>
  let api = new IMKitApi({
    authBase: "https://auth.imkit.io"
  });

  let clientID = "test" + Date.now();
  let signResp = await api.auth.sign({
    id: clientID,
    publicKey: publicKey
  });
  console.log(signResp.token);
</script>
```

需填入 `clientID` 及 `publicKey` ， 其他資訊為選填

`clientID` 請妥善保存到資料庫

### 完整範例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <button onclick="create()">建立客服</button>
    <br />
    <textarea cols="100" rows="20" id="output"></textarea>
    <script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
    <script>
      let api = new IMKitApi({
        authBase: "https://auth.imkit.io"
      });

      async function create() {
        // generateRsaKey
        let keypair = await api.generateRsaKey();
        let publicKey = keypair.publicKey;
        let privateKey = keypair.privateKey;

        // sign
        let clientID = "test" + Date.now();
        let signResp = await api.auth.sign({
          id: clientID,
          publicKey: publicKey
        });
        let token = signResp.token;

        // output
        document.getElementById("output").value = JSON.stringify(
          {
            clientID: clientID,
            token: token,
            publicKey: publicKey,
            privateKey: privateKey
          },
          null,
          2
        );
      }
    </script>
  </body>
</html>
```

## 建立客戶及房間，並將客戶及客服加入房間

### 產生 key

https://imkit.github.io/imkit-js-lib/class/src/api/index.js~IMKitApi.html#instance-method-generateRsaKey

example:

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
<script>
  let api = new IMKitApi({});

  let keypair = await api.generateRsaKey();
  console.log(keypair.publicKey);
  console.log(keypair.privateKey);
</script>
```

`publicKey` 在 sign 時會用到

`privateKey` 請妥善保存到資料庫

### sign

https://imkit.github.io/imkit-js-lib/class/src/api/auth/index.js~Auth.html#instance-method-sign

example:

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
<script>
  let api = new IMKitApi({
    authBase: "https://auth.imkit.io"
  });

  let clientID = "test" + Date.now();
  let signResp = await api.auth.sign({
    id: clientID,
    publicKey: publicKey
  });
  console.log(signResp.token);
</script>
```

需填入 `clientID` 及 `publicKey` ， 其他資訊為選填

`clientID` 請妥善保存到資料庫

## 建立房間並加入

https://imkit.github.io/imkit-js-lib/class/src/api/room/index.js~Room.html#instance-method-createAndJoinRoom

example:

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
<script>
  let api = new IMKitApi({
    domain: "https://chat.fangho.com",
    clientKey: "fangho_imkit_0412_2018_001_clientkey",
    token: token
  });

  let roomResp = await api.room.createAndJoinRoom({
    invitee: [serviceID]
  });
  let roomID = roomResp.id;
  console.log(roomResp.id);
</script>
```

serviceID: 客服的 clientID

token: 客戶 sign 後拿到的 token

`token` 可以在 `new IMKitApi()` 時設定，也可以 sign 後用 `api.config.token = token;` 修改

### 完整範例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" placeholder="客服 ID" id="serviceID" />
    <button onclick="create()">建立客戶</button>
    <br />
    <textarea cols="100" rows="20" id="output"></textarea>
    <script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
    <script>
      let api = new IMKitApi({
        domain: "https://chat.fangho.com",
        authBase: "https://auth.imkit.io",
        clientKey: "fangho_imkit_0412_2018_001_clientkey"
      });

      async function create() {
        // generateRsaKey
        let keypair = await api.generateRsaKey();
        let publicKey = keypair.publicKey;
        let privateKey = keypair.privateKey;

        // sign
        let clientID = "test" + Date.now();
        let signResp = await api.auth.sign({
          id: clientID,
          publicKey: publicKey
        });
        let token = signResp.token;

        // set auth token
        api.config.token = token;

        // create room
        let roomResp = await api.room.createAndJoinRoom({
          invitee: [document.getElementById("serviceID").value]
        });
        let roomID = roomResp.id;

        // output
        document.getElementById("output").value = JSON.stringify(
          {
            clientID: clientID,
            serviceID: serviceID,
            token: token,
            publicKey: publicKey,
            privateKey: privateKey,
            roomID: roomID
          },
          null,
          2
        );
      }
    </script>
  </body>
</html>
```

## 開啟聊天室

### sign

https://imkit.github.io/imkit-js-lib/class/src/api/auth/index.js~Auth.html#instance-method-sign

透過 `clientID` 取得 `token`

example:

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib@3.0.7/lib/imkit-js-api-v3.min.js"></script>
<script>
  let api = new IMKitApi({
    authBase: "https://auth.imkit.io"
  });

  let signResp = await api.auth.sign({
    id: clientID
  });
  console.log(signResp.token);
</script>
```

### 設定 config 並打開聊天室

example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="manifest" href="static/manifest.json" />
    <link href="static/css/reset.css" rel="stylesheet" />
    <link
      href="static/font-awesome/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="static/loaders.css/loaders.min.css" />
    <link href="static/css/index.css" rel="stylesheet" />
    <link href="static/css/app.css" rel="stylesheet"></head>
  </head>
  <body>
    <div id="IMKitApp">
      <div class="appLoader">
        <div class="ball-pulse-sync">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="static/js/manifest.js"></script>
    <script type="text/javascript" src="static/js/vendor.js"></script>
    <script type="text/javascript" src="static/js/app.js"></script>
    <script>
      let token = 'eyJhbG...';
      let privateKey = 'MIIEpA...';
      let config = {
        domain: 'https://chat.fangho.com',
        authBase: 'https://auth.imkit.io',
        urlPreviewApi: 'https://url.imkit.io/',
        clientKey: 'fangho_imkit_0412_2018_001_clientkey',
        token: token,
        privateKey: privateKey,
        bucketName: 'chatserver-upload',
        googleApiKey: 'AIzaSyCimtHXyW8GfZ50Vx_YcFFmaBu7G2Wm2cw',
      }
      window.IMKitUI.init(config);
    </script>
  </body>
</html>

```
