# IMKit Customer service (JavaScript)

## preparing in advance

### Google api key

Please apply Google api key before you use the map location service fuction.
https://developers.google.com/maps/documentation/embed/get-api-key

permission to open：
Maps JavaScript API, Maps Static API, Geocoding API

## create a service

### generate key

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

`publicKey` used in sign 

`privateKey` Please save the database properly

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

Please fill in `clientID` and `publicKey` ，Other Information is Optional field.

`clientID` Please save the database properly

### example

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
    <button onclick="create()">Create a service</button>
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

## Create customer and chat room, and add customers and customer service to the room

### generate key

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

`publicKey` used in sign 

`privateKey` Please save the database properly

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

Please fill in `clientID` and `publicKey` ，Other Information is Optional field.

`clientID` Please save the database properly

## create a chat room and join

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

serviceID: Customer service's clientID

token:token from client signed in

`token` can be set in `new IMKitApi()`，and also can be modified in `api.config.token = token;` after client signs in.

### example

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
    <input type="text" placeholder="Service ID" id="serviceID" />
    <button onclick="create()">create a customer</button>
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

## open chat room

### sign

https://imkit.github.io/imkit-js-lib/class/src/api/auth/index.js~Auth.html#instance-method-sign

Get `clientID` via `token`

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

### config setting and open the chat room

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
      window.ImkitJsSDK.init(config);
    </script>
  </body>
</html>

```
