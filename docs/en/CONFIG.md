# Config

> Notice：modify `FCMConfig`，may have to adjust `messagingSenderId` in `static/manifest.json` and `static/sw.js`

```javascript
var config = {
  // enable or disable debug mode.
  debug: false,
  // chat server site
  domain: "https://chat.fangho.com",
  // auth server site and authClientId can be used together and get token，if you fill token in，you can omit this value.
  authBase: "https://auth.fangho.com",
  // Signed chat user id and authBase  can be used together and get token，if you fill token in，you can omit this value.
  authClientId: "",
  // Get the api URL of the previewed url.
  urlPreviewApi: "https://url.imkit.io/",
  // chat server clientkey
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  // chat user token is Optional field. if you don't fill token, you need to fill authBase and authClientId in.
  token: "",
  // Message decryption key
  privateKey: "",
  // S3 bucketName
  bucketName: "chatserver-upload",
  // google api key，need to enable Maps JavaScript API, Maps Static API, Geocoding API
  googleApiKey: "AIzaSyCimtHXyW8GfZ50Vx_YcFFmaBu7G2Wm2cw",
  // app logo，showed on the top of the chat list，appLogo and appName  are filled in，logo will be show in the right side.
  appLogo: "https://i.imgur.com/gchEcBi.png",
  // app name，showed on the top of the chat list，appLogo and appName are filled in，name will be show in the right side.
  appName: "",
  // language 'zh-tw' or 'en'
  lang: "zh-tw",
  // Required headers when you get avatar
  avatarHeaders: [
    // {
    //   name: 'token',
    //   // 'variable' or 'stable'
    //   type: 'variable',
    //   // Variable name or value
    //   value: 'token'
    // },
    // {
    //   name: 'stableValue',
    //   // 'variable' or 'stable'
    //   type: 'stable',
    //   // Variable name or value
    //   value: 'testStable'
    // }
  ],
  // download file headers
  downloadFileHeaders: [
    // {
    //   name: 'Authorization',
    //   // 'variable' or 'stable'
    //   type: 'variable',
    //   // Variable name or value
    //   value: 'token'
    // }
  ],
  layout: {
    // enable or disable to show the list on the left
    list: true,
    // enable or disable to show the right information bar
    info: true
  },
  // Intermediate chat block settings
  chat: {
    // enable or disable to show chat block header
    showHeader: true,
    // below chat tool button settings
    actions: {
      // Emoticon
      emoji: {
        // enable or disable
        enable: true,
        mobileEnable: true,
        // description
        text: "Send Emoji"
      },
      // sticker
      sticker: {
        // enable or disable
        enable: true,
        mobileEnable: true,
        // description
        text: "Send Sticker"
      },
      // photo
      image: {
        // enable or disable
        enable: true,
        mobileEnable: true,
        // description
        text: "Send Image",
        extra: {
          // Restricted file format
          accept: [
            "image/png",
            "image/jpeg",
            "image/heic",
            "image/heic-sequence"
          ],
          // Restricted file size (MB)
          limitSize: 10,
          // Maximum width and height of the thumbnail (px)
          thumbnailSize: 1500
        }
      },
      // video
      video: {
        // enable or disable
        enable: true,
        mobileEnable: true,
        // description
        text: "Send Video",
        extra: {
          // Restricted file format
          accept: ["video/mp4", "video/quicktime"],
          // Restricted file size (MB)
          limitSize: 100,
          // Maximum width and height of the thumbnail (px)
          thumbnailSize: 1500
        }
      },
      // file
      file: {
        // enable or disable
        enable: true,
        mobileEnable: true,
        // description
        text: "Send File",
        extra: {
          // Restricted file format
          accept: ["application/pdf", "audio/mp3"],
          // Restricted file size (MB)
          limitSize: 10
        }
      },
      // record
      recorder: {
        // enable or disable
        enable: true,
        mobileEnable: true,
        // description
        text: "Send Recorder",
        extra: {
          // setting record limit Second
          limitSeconds: 60
        }
      },
      // location
      location: {
        // enable or disable
        enable: true,
        mobileEnable: true,
        // description
        text: "Send Location"
      },
      // payment flow
      paymentRequest: {
        // enable or disable
        enable: false,
        mobileEnable: false,
        // description
        text: "Send Payment Request",
        extra: {
          // Supported currency
          currencies: ["TWD", "USD"],
          // payment request API
          requestApi: "",
          paymentBy: [
            {
              key: "paypal",
              text: "PayPal"
            },
            {
              key: "tappay",
              text: "TapPay"
            },
            {
              currencies: ["TWD"],
              key: "newebpay",
              text: "藍新"
            }
          ]
        }
      }
    },
    // chat room button position: 'bottom' or 'right'
    actionsPosition: "bottom",
    //   Text limit Length
    limitTextLength: 500,
    // the way to close Image, video, and viewer.
    // 'close'：the right upper fork
    // 'back'：the left upper return arrow
    sliderReturnMode: "close",
    // use asynchronous read when getting url meta
    asyncUrlPreview: true,
    // Custom color, color format：'#123456' or 'rgba(12, 34, 56, 0.5)'
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
        color: null
      },
      // other's message
      others: {
        // background color
        background: null,
        // text color
        color: null
      },
      // system message
      system: {
        // background color
        background: null,
        // text color
        color: null
      }
    },
    // the maximum width of the thumbnail (px)
    thumbnailSize: 500,
    // enable or disable to show read
    readReceipt: true,
    // enable or disable to open reply fuction
    reply: true,
    // enable or disable to open forward fuction
    forward: true,
    // enable or disable to open recall fuction
    recall: true,
    // enable or disable to download audio file
    audioDownload: true,
    sticker: [
      {
        folder: "funfunfamily",
        icon: "FunFunFamily-1.png",
        prefix: "FunFunFamily-",
        suffix: ".png",
        count: 40
      }
    ]
  },
  // left chat list settings
  list: {
    // The way of sort. Value: null, 'createdTime'
    sort: null,
    // The number of opened rooms.Value=0 means no limit.
    maxCount: 0,
    // text is showed in locked room.
    lockText: "",
    // on click event in locked room
    lockOnClick: function() {},
    // Custom color, color format：'#123456' or 'rgba(12, 34, 56, 0.5)'
    colors: {
      // Header color setting
      header: {
        // background color
        background: null,
        // text color
        color: null
      }
    },
    // enable or disable to number of members
    memberCount: true,
    logout: {
      // enable or disable to show logout button
      enable: true,
      // logout event
      event: function() {
        localStorage.removeItem("IMKit-token");
        document.location.href = "demo";
      }
    },
    // enable or disable to sticky the room
    sticky: true,
    // enable or disable to create the room
    createRoom: true
  },
  // right chat info bar settings
  info: {
    // Custom color, color format：'#123456' or 'rgba(12, 34, 56, 0.5)'
    colors: {
      // Header color setting
      header: {
        // background color
        background: null,
        // text color
        color: null
      }
    },
    // enable or disable to edit
    edit: {
      // enable or disable to edit room
      room: {
        // enable or disable to edit room name
        name: true,
        // enable or disable to edit room description
        description: true,
        // enable or disable to edit room photo
        cover: true
      },
      // enable or disable to create new room
      createRoom: true,
      // enable or disable to leave the room
      leave: true,
      // enable or disable to kick other member off
      remove: true,
      // enable or disable to invite member
      invite: true
    },
    // enable or disable to open member list
    openMembersList: false,
    // Additional information displayed
    iframes: [
      // {
      //   // title
      //   title: 'Test',
      //   // site，roomId ,and  clientIds will be taken in iframe
      //   url: '//imkit.io/',
      //   // enable or disable to open
      //   open: true,
      //   // height
      //   height: 300
      // }
    ]
  },
  // Events
  events: {
    // enable or disable to run the default event from opening the room
    onSetRoomActiveDefault: true,
    // trigger when room is opened
    onSetRoomActive: null,
    // process in calling API failed
    onAjaxError: function(error) {
      if (error.RC === 401) {
        window.location.href = "../demo";
      } else {
        console.error(error.RM);
      }
    }
  },
  // if you don't have defaultRoom，Automatically enter the first room of the list
  autoEnterRoom: true,
  // the room you enter (room id)
  defaultRoom: null,
  // setting room information after you create a new room
  createRoom: {
    // enable or disable to set room ID
    id: true,
    // enable or disable to set room name
    name: true,
    // enable or disable to set room description
    description: true,
    // enable or disable to set room photo
    cover: true
  },
  // if Setting is "true" ，the room is muted and no sound is emitted when the message is received.
  alwaysMute: false,
  //  Set changing title when you receive the message.
  changeTitle: true,
  // Custom multi-national language
  i18n: {
    en: {
      Test: "Test",
      "Send Emoji": "Send Emoji",
      "Send Sticker": "Send Sticker",
      "Send Image": "Send Image",
      "Send Video": "Send Video",
      "Send File": "Send File",
      "Send Recorder": "Send Recorder",
      "Send Location": "Send Location",
      "Send Payment Request": "Send Payment Request"
    },
    "zh-tw": {
      Test: "測試",
      "Send Emoji": "傳送表情符號",
      "Send Sticker": "傳送貼圖",
      "Send Image": "傳送圖片",
      "Send Video": "傳送影片",
      "Send File": "傳送檔案",
      "Send Recorder": "傳送錄音",
      "Send Location": "傳送位置訊息",
      "Send Payment Request": "傳送請款訊息"
    }
  },
  // Custom function
  special: {
    // the room's description
    // renderRoomDescription: function(roomDescription) {
    //   if (roomDescription && roomDescription.indexOf('::')) {
    //     return roomDescription
    //       .split('::')
    //       .splice(1)
    //       .join(' ');
    //   } else {
    //     return roomDescription;
    //   }
    // }
    renderRoomDescription: null
  },
  // Push settings (Firebase Cloud Messaging Config)
  // if you don't use push，please fill in "null"
  FCMConfig: {
    apiKey: "AIzaSyDH6fgpRFaH7vIqAcGQi48wgvNf8BJ9q1I",
    authDomain: "fir-chat-server.firebaseapp.com",
    databaseURL: "https://fir-chat-server.firebaseio.com",
    projectId: "fir-chat-server",
    storageBucket: "fir-chat-server.appspot.com",
    messagingSenderId: "970263218499"
  }
};
```
