# IMKit Web SDK

[FUNTEK](http://funtek.co/) 提供 Chat API 與 SDK，可整合至網站服務流程中，協助網站建立即時通訊功能，讓使用者可以在網站中進行對談。

## 使用範例

- [網頁對談範例](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/DEMO.md)，使用 [IMKit Web SDK](https://github.com/imkit/imkit-web-sdk/) 建立。
- [網頁 Widget 範例](https://github.com/imkit/imkit-web-sdk/blob/master/demo/iframe.html)，使用 [IMKit Web SDK](https://github.com/imkit/imkit-web-sdk/) 建立。

## 概念介紹

- [關於 IMKit Web SDK](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/CONCEPT.md#%E9%97%9C%E6%96%BC-imkit-web-sdk)
- [什麼是 In-Web Chat ?](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/CONCEPT.md#%E4%BB%80%E9%BA%BC%E6%98%AF-in-web-chat-)
- [聊天元素](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/CONCEPT.md#%E8%81%8A%E5%A4%A9%E5%85%83%E7%B4%A0)
- [使用 IMKit 前的情境設計](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/CONCEPT.md#%E4%BD%BF%E7%94%A8-imkit-%E5%89%8D%E7%9A%84%E6%83%85%E5%A2%83%E8%A8%AD%E8%A8%88)
- [IMKit Web SDK 的基本運作流程](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/CONCEPT.md#imkit-web-sdk-%E7%9A%84%E5%9F%BA%E6%9C%AC%E9%81%8B%E4%BD%9C%E6%B5%81%E7%A8%8B)

## 開始使用 IMKit Web SDK

如果您準備好要整合即時通訊到您的網站，請依照下面的指示逐步完成。

### Step 1. 在 IMKit Dashboard 上建立聊天應用程式

1.  至 [IMKit Dashboard](https://dashboard.imkit.io/) 建立一個新帳號。
2. 建立一個新的聊天應用程式。
3. 每個應用程式都會有專屬的 `Chat Server URL`、`API Key` 與 `Client Key`.

> 1. 使用 `Chat Server URL` 及 `Client Key` ，可以將 Chat Server 與安裝在您網站中的 IMKit Web SDK 連接起來。
> 2. 使用 `Chat Server URL` 及 `API Key` 可以呼叫 Chat Server API 去實作更多對談場景所需的功能。

### Step 2. 下載 Web SDK

複製 Web SDK 並將 `static` 資料夾放至指定資源路徑。

```bash
git clone https://github.com/imkit/imkit-web-sdk
```

### Step 3. 安裝 Web SDK

將下列程式碼加入至 `index.html`。

```html
<!-- CSS -->
<link href="static/css/reset.css" rel="stylesheet" />
<link href="static/css/index.css" rel="stylesheet" />
<link href="static/css/app.css" rel="stylesheet" />

<!-- JS -->
<script type="text/javascript" src="static/js/manifest.js"></script>
<script type="text/javascript" src="static/js/vendor.js"></script>
<script type="text/javascript" src="static/js/app.js"></script>

<!-- BODY -->
<div id="IMKitApp">
  <div class="loader appLoader"></div>
</div>
```

### Step 4. 初始化 Web SDK

- 請閱讀 [IMKit Auth](https://github.com/FUNTEKco/chat-server-document/wiki#external-auth-service) 了解關於 Auth 方式的相關資訊。

- 請閱讀 [CONFIG.md](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/CONFIG.md) 了解更多關於 Configuration 的參數設定。

- 將從 [IMKit Dashboard](https://dashboard.imkit.io/) 獲得的 `Chat Server URL` 及 `Client Key` 填入 `static/config.js`。

```jsx
<script src="static/config.js"></script>
<script>
	window.IMKitUI.init(config);
</script>
```

### Step 5. 建立新的使用者

```jsx
let api = new IMKitApi({
  domain: config.domain,
  clientKey: config.clientKey,
  token: config.token
});
api.me
  .updateInfo({
    // user nickname
    nickname: "nickname",
    // url of user photo
    avatarUrl: "http://funtek.co/logo/logo_funtek_2020.png",
    // user description
    description: "description",
  })
  .then(function (data) {
    console.log(data);
  });
```

### Step 6. 建立新的聊天室並加入使用者


#### `一對一對談`


```jsx
api.room
  .createAndJoinRoom({
    //invitee to join room
    invitee: "invitee",
    //type of 1 on 1 chat
    roomType: "direct"
  })
  .then(function (data) {
    console.log(data);
  });
```

#### `群組對談`


```jsx
api.room
  .createAndJoinRoom({
    // title of the room
    name: "room title",
    //url of group photo
    cover:"http://funtek.co/logo/logo_funtek_2020.png",
    // group chat description
    description: "description",
    //list of invitees to join room
    invitee: ["invitee1", "invitee2"],
    //type of 1 on 1 chat
    roomType: "group", 
  })
  .then(function (data) {
    console.log(data);
  });
```

### Step 7. 登出

將使用者從 Chat Server 中登出。

```jsx
localStorage.removeItem('IMKit-token');
```

## 其他文件

- [自定義貼圖](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/STICKER.md): 新增自定義貼圖至 Chat SDK。
- [未讀數](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/APILIB.md#badge): 計算聊天室未讀數。
- [聊天室與使用者管理](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/APILIB.md): 管理使用者與聊天室。
- [Chat Server API](https://github.com/FUNTEKco/chat-server-document/wiki): 使用 [IMKit Dashboard](https://dashboard.imkit.io/) 提供的 **API Key** 及 **Chat Server URL** 呼叫 Chat Server API 以實現更多對談場景功能。
- [IMKit JavaScript API](https://github.com/imkit/imkit-js-lib): 透過 **IMKit JavaScript API** 建立自己的 Chat UI。
- [IMKit Dashboard](https://dashboard.imkit.io/): Chat Server 管理後台，包括數據統計及 Chat Server 管理。


## 使用者條款與隱私權政策

- [使用者條款](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/TERMS.md)
- [隱私權政策](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/PRIVACY.md)
