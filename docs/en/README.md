> Subordinate this project Demo，please read DEMO.md

> Manage chat user、chat room or get badge，please read APILIB.md

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

> config please read CONFIG.md

```javascript
window.IMKitUI.init(config);
```

*******

# IMKit Web SDK Document

## Abstract

- Version
- About IMKit Web SDK
- In-Web Chat
- Component of Chat
- Chat Scenario Design
- How IMKit Web SDK Works?
- Installation
- Other Settings

## Version

- Version: v1.0.1 Build 001 
- Date: May 16, 2020

## About IMKit Web SDK

**IMKit** is the Chat SDK (Software Development Kits) developed by [FUNTEK](https://funtek.co). You can effeciently install IMKit Web SDK with **instant messaging and chat functions** to your current website.

IMKit includes Web SDk and a set of chat servers running on the cloud service. It builds the communication between SDK in your website and chat server, and makes message sending happen.

## In-Web Chat

The mission of IMKit Web SDK is to enable the users on your website to chat with each other.

The users don't need to communicate via other social messenger out of your website. Ex.
[Facebook Messenger](https://www.messenger.com) / [WhatsApp](https://www.whatsapp.com) / [LINE](https://line.me/)

This, is In-Web Chat.

## Component of Chat

There are three main components during chat:

- User
- Chat Room List
- Chat Room

## Chat Scenario Design

Beofre you adopt IMKit Web SDK, you must have a website with existing member system. Besides, you need to design a chat scenario for users to start a 1 on 1 Chat or Group Chat.

> Example 1. A C2C E-commerce platform
> You can provide a **button** for users to chat with product sellers directly. This **button** is the trigger point to start the chat.

-

> Example 2. A C2C Real-Estate Platform
> You can provide a **button** for house buyers to chat with house owners directly. This **button** is also the trigger point to start the chat.

After building a trigger point to start the chat on your website, you also need to design an area to display Chat Room List.

For example, ydu cna build a tab in the tab bar for users to check Chat Room List.

## How IMKit Web SDK Works?

首先，要跟您告知，IMKit SDK 的運作需要和您的網站緊密結合。

這邊分成**三部分**來說明基本運作流程。所謂的基本是指概念上的流程，實際上的執行細節稍後詳述。這邊先給您一個概念，讓您可以快速理解。

### Part 1. Create User

In general, your website will get a token to indentify user login status as user finishes the login or registration. Your website can create an user by calling the API and providing this token to Chat Server.

- **Step 1.** User logs in or signs up to your website.
- **Step 2.** Your Web Server sends a token to your website.
- **Step 3.** You website uses this token to create an user on Chat Server.

> p.s. Chat Server needs to save a set of memeber data from your website. This set of member data doesn't collect confidential data. It only needs to contain chat related information like Display Name and Avatar.

### Part 2: Add Users to Chat Room

Next, we will create Chat Room. 

Following the Chat Scnerio on your website, you need to collect Client IDs, which will join the room to chat. Then you can call the API to create Chat Room.


- **Step 4.** User triggers a chat with others in a chat scenario on your website (ex. contact with sells, contact with customer service). Your website collects Client IDs of the invitor and invitees.

- **Step 5.** Your website calls the API to add Client IDs of invitor and invitess to the Chat Room.

### Part 3: Display Chat Room List

The last is an indendent part: Display Chat Room List.

Your website needs to have a scenario to display Chat Room List by calling the API.

- **Step 6.** Your website needs to display Chat Room List by a trigger from users or website.
- **Step 7.** Your website calls the API to display Chat Room List.
                                                                

## Installation

### Integrate IMKit Ｗeb SDK 

To integrate IMKit Web SDK, you need to add few source codes to your website. We'll introduce it step by step.

[FUNTEK](https://funtek.co) provides [Sample Chat](https://github.com/imkit/imkit-web-sdk). You can experience IMKit Web SDK by this sample chat.

7 Steps to integrate IMKit Web SDK

1. **Install Web SDK**
2. **Initialization**
3. **Creae / Update User Profile**
4. **Create Chat Room**
5. **Logout**
6. **Sticker Setting**
7. **Style Setting**

### 1. Install Web SDK

```bash
git clone https://github.com/imkit/imkit-web-sdk
```

Add folowing codes to index.html

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

### 2. Initialization

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

> p.s. If the demo token expires, please contact [IMKit Customer Service] (https://pinchat.me/websdk).


### 3. Creae / Update User Profile

In IMKit Web SDK, you can create and update user profile by the same API.

As the API below being called, Chat Server will create a new user if the user doesn't exist. Eles, Chat Server will update the existing user profile.

Your web server needs to update the user profile to Chat Server after the user log in to your website, incudling Display Name, Avatar URL, and other customized user data.

Chat Server will get Client ID by asking your web server via access token.

> p.s. Client ID is for chat server usage instead of the user id/account in your website.

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

### 4. Create Chat Room

After creating the user by received user profiles in Chat Server, you can start to creat Chat Room.

Currently, IMKit Web SDK provides two chat modes, including 1 on 1 Chat and Group Chat.

#### `1 on 1 Chat`

To create a 1 on 1 Chat, you can use the API below to invite another user to join the chat by Clinet ID.


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

In 1 on 1 Chat, the chat room name will be the display name and the avatar of the opposite user. The name of chat room can't be changed. 

#### `Group Chat`

To create a Group Chat, you can use the API below to invite multiple invitees to join the chat by array of Client IDs.

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
You can assign customized chat room id as creating gropu chat. IMKit Chat Server would assign the chat room id spontaneously if you don't assign chat room id.

### 5. Logout

```jsx
localStorage.removeItem('IMKit-token');
```

### 6. Sticker Setting

- Put all sticker files in  `static/sticker`  
   - Categorized by folder name
   - File name must be added folder name as prefix with `-`
   - File name must include incremental and continuous numbers from 1. Ex. `insowe-1, insowe-2`...etc
    - File format must be `png`
- Modify `config.chat.sticker` in `static/config.js` 
    - An Object stands for a folder
    - folder: 'FunFunFamily', // Folder Name
    - icon: 'FunFunFamily-1', // Icon
    - count: 40 // Number of photos

### 7. Style Setting

Set color related attribues in `colors` section of `static/config.js`.

```jsx
// customized color, color format：'#123456' pr 'rgba(12, 34, 56, 0.5)'
colors: {
  // Header color settings
  header: {
    // background color
    background: null,
    // text color
    color: null
  },
  // client message
  self: {
    // background color
    background: null,
    // text color
    color: null,
    // border color
    borderColor: null
  },
  // other's message
  others: {
    // background color
    background: null,
    // text color
    color: null,
    // border color
    borderColor: null
  },
  // system message
  system: {
    // background color
    background: null,
    // text color
    color: null,
    // border color
    borderColor: null
  }
}
```

## Other Settings

### Get Amount of Unread Badges

Get amount of unread badges

```jsx
api.me.getBadge().then(function(data) {
  console.log("badge: " + data);
});
```
