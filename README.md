# IMKit Web UI SDK

This is Traditional Chinese introduction. You can use the link below to read in other languages.

- English [en](https://github.com/imkit/imkit-web-sdk/tree/master/docs/en)
- 日本語

## IMKit 提供在 Web 上建構即時通訊軟體所需兩個 SDK:

### JS SDK
JS SDK 提供存取 IMKit Chat Server 的 Javascript API 和文件，透過 JS SDK 可進行即時通訊的各種操作，例如建立聊天室、加入聊天室、傳送訊息等。

### UI SDK
UI SDK 提供在 Web 上建構即時通訊軟體所需的介面開發實作。本文件將介紹如何使用 UI SDK。

> 部屬本專案 Demo，請參閱 DEMO.md

> 管理 chat user、chat room 或取得即時 badge，請參閱 APILIB.md

*****

# IMKit Web SDK

### Install

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

### Start

> config 請參閱 CONFIG.md

```javascript
window.IMKitUI.init(config);
```

********

# IMKit Web SDK 文件

## 摘要

- 版本資訊
- 關於 IMKit Web SDK
- 什麼是 In-Web Chat
- 聊天元素
- 使用 IMKit 前的情境設計
- IMKit SDK 的基本運作流程
- 安裝步驟
- 其他設定

## 版本資訊

- 版本：v1.0.1 Build 001 
- 日期：May 16, 2020

## 關於 IMKit Web SDK

**IMKit** 是由樂堤科技 [FUNTEK](https://funtek.co) 所研發的即時通訊軟體開發工具組 (SDK, Software Development Kits)，使用此 Web SDK 可快速將**即時通訊/聊天**功能安裝在您既有的網站內。

IMKit 除了包含 Web SDK 之外，概念上還有一個 (實際上是一組) Chat Server 跑在遠端伺服器上，讓網站內的 SDK 可和 Chat Server 之間彼此聯繫，完成訊息傳遞的功能。

## 什麼是 In-Web Chat ?

IMKit Web SDK 的主要任務，是讓您的使用者可以在您的 Web 內直接彼此對談。

不需要跳離您的網站，轉去其他的通訊軟體溝通，例如： [Facebook Messenger](https://www.messenger.com) / [WhatsApp](https://www.whatsapp.com) / [LINE](https://line.me/)

我們稱這種在網站內直接讓使用者間彼此對談的功能，叫做 **In-Web Chat**。

## 聊天元素

整個聊天過程中我們會談到的元素包含：

- 使用者 (User)
- 聊天室列表 (Chat Room List)
- 聊天室 (Chat Room)

## 使用 IMKit 前的情境設計

使用 IMKit Web SDK 之前，您需要先有一個網站，並且已經有既有的使用者或會員資料。

在網站使用 IMKit Web DK 時，需要您先設計一個情境，是可讓兩個使用者，或是多個使用者建立一對一聊天或多人群聊的觸發點。

> 舉例 1，如果您的網站是一個 C2C 電商平台，專門讓使用者可以在此平台上販售自己的商品，那麼您可以設計一個使用情境。例如在商品列表的顯示頁面上，點選某一個商品進入商品資訊頁時，設計一個**按鈕**，讓使用者 A 可以點選這個按鈕，直接和商品的賣家做直接對談，這個**按鈕**就是建立聊天室的起始點。

-

> 舉例 2，如果您的網站是一個 C2C 房屋販售平台，讓使用者可以在此平台上刊登自己的房屋進行出售，那麼您可以設計一個使用情境，例如在房屋列表顯示頁面上，點選某一個房屋進入房屋資訊頁時，設計一個**按鈕**，讓使用者 A 可以點選這個按鈕，直接和屋主做直接對談，這個**按鈕**也同樣是建立聊天室的起始點。

有了建立一對一或多人群聊的觸發點之後，您還需要在網站中設計區塊用來顯示聊天室列表，例如在網站主頁面的下方 tab bar 上，建立一個 tab 來放置聊天室列表的按鈕。

## IMKit Web SDK 的基本運作流程

首先，要跟您告知，IMKit SDK 的運作需要和您的網站緊密結合。

這邊分成**三部分**來說明基本運作流程。所謂的基本是指概念上的流程，實際上的執行細節稍後詳述。這邊先給您一個概念，讓您可以快速理解。

### 第一部分：建立使用者

IMKit 和您的網站一起運作的流程如下。

首先您的網站通常會在使用者註冊或登入時，取得一個 token 來記錄這個 user 已經登入。網站接下來就可呼叫 IMKit Web SDK 提供的 API，傳遞此 token 給 IMKit 的遠端 Chat Server，在 IMKit Chat Server 上建立使用者。

- **步驟1.** 使用者透過您的 Web 進行註冊或登入至您的後端 Server 
- **步驟2.** 您的後端 Server 回傳 Token 至您的 Web 
- **步驟3.** 您的 Web 使用此 Token 向 IMKit Chat Server 建立使用者

>【註】IMKit 的 Chat Server 內會需要有一份您的會員資料。此會員資料不需要存放機密資料，只需傳遞在聊天過程中所需的必要資料即可，比方說使用者的顯示名稱 (Display Name)、顯示頭像 (Avatar) 等。

### 第二部分：將使用者加入聊天室

接下來是建立聊天室。這裡會需要在您網站內設計情境，來收集要加入到聊天室內的使用者 ID 之後，接著呼叫 API 即可完成聊天室的建立。

- **步驟4.** 在您的 Web 某個情境操作下，使用者觸發進入聊天室（例如：與賣家聯繫、聯絡客服），您收集該使用者 ID 與其他對談對象的 ID
- **步驟5.** 您的 Web 呼叫 API，將要進入聊天室的使用者 ID 加入該聊天室

### 第三部分：顯示聊天室列表

這邊是比較獨立的部分：顯示聊天室列表。需要您在網站內設計一個情境，來呼叫 API 顯示聊天室列表。

- **步驟6.** 在您的 Web 某個情境操作下，透過使用者觸發或頁面更新以顯示聊天室列表
- **步驟7.** 您的 Web 呼叫 API，顯示聊天室列表
                                                                

## 安裝步驟

### 整合 IMKit Ｗeb SDK 至網站的詳細步驟

整合 IMKit Web SDK 需要在您既有的網站內新增一些程式碼，我們以下按照七個步驟，來逐步添增程式碼到您的網站內。

[FUNTEK](https://funtek.co) 提供一個[Demo 範例](https://github.com/imkit/imkit-web-sdk) ，您可直接使用 Demo 體驗 IMKit Web SDK 的服務。

這七個步驟依序是：

1. **Web SDK 安裝**
2. **初始化**
3. **建立/更新使用者資訊**
4. **建立聊天室**
5. **登出**
6. **貼圖設定**
7. **Style 設定**

接下來我們逐步詳細說明。

### 1. Web SDK 安裝

```bash
git clone https://github.com/imkit/imkit-web-sdk
```

把下列加入 index.html

```jsx
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

### 2. 初始化

```jsx
<script src="static/config.js"></script>
<script>
	config.domain = "https://chat.fangho.com";
	config.clientKey = "fangho_imkit_0412_2018_001_clientkey";
	config.token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlbW8xIiwiZXhwIjoxNTg4NDI2OTc0LCJpYXQiOjE1ODgzNDA1NzR9.l1IWAnjbu9MVVWXblITIWjSIK-2bZP6t7vDhisSFKAo";
	window.IMKitUI.init(config);
</script>
```

>【註】若上述的 token 失效或有任何問題，請聯繫 [IMKit Web SDK 客服團隊] (https://pinchat.me/websdk) 。


### 3. 建立/更新使用者資訊

這邊我們將建立使用者資訊與更新使用者資訊寫在同一個地方，原因是，他們是同一個 API。

當第一次呼叫此 API 時，Chat Server 會去判斷此使用者是否被建立過。如果沒有，就建立新的使用者；如果已被建立，就更新此使用者的資訊。

當使用者登入您的 Web 後，您的 Web 需向 Chat Server 更新此登入之使用者資訊，資訊包含聊天室的顯示名稱 (Display Name)、顯示頭像網址 (Avatar URL)，或是其他自定義的使用者資訊(聊天中會需要呈現的資訊)。

使用者 ID (Client ID) 不用設定，因為 Chat Server 會使用 Access Token 向 Web Server 取得使用者 ID (Client ID)。

>【註】Client ID 為使用者於 Chat Server 上的 ID，並非您 Web 中的使用者帳號。

```jsx
let api = new IMKitApi({
  domain: config.domain,
  clientKey: config.clientKey,
  token: config.token
});
api.me
  .updateInfo({
    nickname: "Howard",
    avatarUrl: "https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/201912/5E0333B8633C81577268152.png",
    description: "description",
  })
  .then(function (data) {
    console.log(data);
  });
```

### 4. 建立聊天室

目前在 Chat Server 中，已經有此使用者進入聊天室前所需的相關資訊，之後就是建立什麼類型的聊天室。目前 IMKit 支援一對一聊天室與群組聊天室兩種模式。

#### `一對一聊天室`

在您的 Web 中會有一個按鈕，讓使用者可以與其他使用者進行一對一聊天對談。

使用以下 API，帶入對方的 Client ID。

```jsx
api.room
  .createAndJoinRoom({
    invitee: "demo2",
    roomType: "direct"
  })
  .then(function (data) {
    console.log(data);
  });
```

在 IMKit Web SDK 中，一對一聊天室的名稱會顯示對方的頭像與名稱，聊天室名稱不可修改。

#### `群組聊天室`

可以使用以下 API，帶入群組人員的多個 Clinet ID 來建立群組聊天室，多個 Client ID 以 Array 方式呈現。

```jsx
api.room
  .createAndJoinRoom({
    name: "demo room",
    cover:
      "https://media.cakeresume.com/image/upload/s--iUxjuOr4--/c_pad,fl_png8,h_400,w_400/v1531047165/j6n288cofvckjifijqo3.png",
    description: "description",
    invitee: ["demo2", "demo3"],
    roomType: "group", 
  })
  .then(function (data) {
    console.log(data);
  });
```
在建立群組聊天室時，可以自定義聊天室編號。若不自定義，則由 Chat Server 自行指定聊天室編號。

### 5. 登出


```jsx
localStorage.removeItem('IMKit-token');
```

### 6. 貼圖設定

- 將素材放入 `static/sticker` ，以資料夾歸類
    - 檔名前綴必須與資料夾名稱相同並加上 `-`
    - 資料夾內圖片檔名必須包含數字，從 1 開始，不得中斷。例如 `insowe-1, insowe-2`，依此類推
    - 附檔名必須是 `png`
- 修改 `static/config.js` 中的 `config.chat.sticker`
    - 一個 Object 代表一個資料夾
    - folder: 'FunFunFamily', // 資料夾名稱
    - icon: 'FunFunFamily-1', // 代表 Icon
    - count: 40 // 圖片張數

### 7. Style 設定

`static/config.js` 中有 `colors` 的屬性可以設定顏色

```jsx
// 自訂顏色，顏色格式：'#123456' 或 'rgba(12, 34, 56, 0.5)'
colors: {
  // Header 顏色設定
  header: {
    // 背景色
    background: null,
    // 文字顏色
    color: null
  },
  // 自己發送的訊息
  self: {
    // 背景色
    background: null,
    // 文字顏色
    color: null,
    // 邊框色
    borderColor: null
  },
  // 其他人發送的訊息
  others: {
    // 背景色
    background: null,
    // 文字顏色
    color: null,
    // 邊框色
    borderColor: null
  },
  // 系統訊息
  system: {
    // 背景色
    background: null,
    // 文字顏色
    color: null,
    // 邊框色
    borderColor: null
  }
}
```

## 其他設定

### 取得總未讀數

取得目前聊天總未讀數

```jsx
api.me.getBadge().then(function(data) {
  console.log("badge: " + data);
});
```

