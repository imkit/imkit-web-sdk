# IMKit Web SDK

[FUNTEK](http://funtek.co/) provides the chat API and SDK to be integrated with your web service and to enable real-time communications for all users.

You can explore more versions in different languages as below.

- [Chinese](https://github.com/imkit/imkit-web-sdk/blob/master/docs/zh-tw/README.md)
- Japanese

## Sample
                 
- [Basic Sample](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/README.md)
- [Widget Sample](https://github.com/imkit/imkit-web-sdk/blob/master/demo/iframe.html)

## Concept

- [About IMKit Web SDK](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/CONCEPT.md#about-imkit-web-sdk)
- [What Is In-Web Chat?](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/CONCEPT.md#in-web-chat)
- [Component of Chat](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/CONCEPT.md#component-of-chat)
- [Chat Scenario](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/CONCEPT.md#chat-scenario-design)
- [How IMKit Web SDK Works?](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/CONCEPT.md#how-imkit-web-sdk-works)


## Get Started

If you are ready to integrate chat to your service, please follow instructions step-by-step as below.

### Step 1. Create a Chat Application from IMKit Dashboard

1. Visit [IMKit Dashboard](https://dashboard.imkit.io/) and create a new account.
2. Create a new application.
3. Each applicaiton has its own `Chat Server URL`, `API Key`, and `Client Key`.

> 1. Use `Chat Server URL` and `Client Key` to initialize the connection of chat server and SDK intalled in your web service.
> 2. Use `Chat Server URL` and `API Key` to call chat server api for more chat functions.

### Step 2. Download the Web SDK

Clone Web SDK and put its `static` folder to target path.

```bash
git clone https://github.com/imkit/imkit-web-sdk
```

### Step 3. Install the Web SDK

Add following code to `index.html`.

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

### Step 4. Initialize the Web SDK

- Read [IMKit Auth](https://github.com/FUNTEKco/chat-server-document/wiki#external-auth-service) to set up auth service.

- Read [CONFIG.md](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/CONFIG.md) for more configuration settings.

- Insert `Chat Server URL` and `Client Key` from [IMKit Dashboard](https://dashboard.imkit.io/) to `static/config.js`.


```jsx
<script>
	const config = {
		domain: "https://howard7.imkit.io",
		clientKey: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiIySllwWWhEYVFsSVFsRFN2VkxDTExvMk1QekZmVm05allweHcydnVCcm1rPSIsImNyZWF0ZUF0IjoxNTkxOTcyNTc2NDE0LCJjbGllbnRJZCI6IjJiM2JkNWNjLTRhODYtNGE0MC1hMTU0LTE2NDA0MDE0ZGE4OCJ9.bdIWOcPfDrNuLRszgtrQDaQiow_X-WolzjDhtiLEED8",
		token: "fVy7YhqBZqEzNO9LhMmcyA=="
	}
	window.IMKitUI.init(config);
</script>
```

### Step 5. Create a New User

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

### Step 6. Create a New Chat Room and Invite User


#### `1 on 1 Chat`


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

#### `Group Chat`


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

### Step 7. Logout

Logout user from chat server.

```jsx
localStorage.removeItem('IMKit-token');
```

## Documentation

- [Customized Stickers](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/STICKER.md): Add own stickers to chat SDK.
- [Badge Usage](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/APILIB.md#badge): Count the unread badges.
- [User and Room Management](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/APILIB.md): Manage users and rooms.
- [Chat Server API](https://github.com/FUNTEKco/chat-server-document/wiki): Use **API Key** and **Chat Server URL** provided in [IMKit Dashboard](https://dashboard.imkit.io/) to call APIs and fulfill actual scenario.
- [IMKit JavaScript API](https://github.com/imkit/imkit-js-lib): Build own chat UI by **IMKit JavaScript API**.
- [IMKit Dashboard](https://dashboard.imkit.io/): Chat server management.


## Terms & Privacy

- [Terms Agreement](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/TERMS.md)
- [Privacy Policy](https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/PRIVACY.md)
