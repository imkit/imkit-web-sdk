# Config

> 注意：修改 `FCMConfig`，可能需要同時修改 `static/manifest.json` 及 `static/sw.js` 中的 `messagingSenderId` 參數

```javascript
var config = {
  // 是否開啟 debug
  debug: false,
  // chat server 位置
  domain: "https://chat.fangho.com",
  // auth server 位置，與 authClientId 配合取得 token，若填 token，此值可不填
  authBase: "https://auth.fangho.com",
  // 登入的 chat user id，與 authBase 配合取得 token，若填 token，此值可不填
  authClientId: "",
  // 取得 url 預覽內容的 api 網址
  urlPreviewApi: "https://url.imkit.io/",
  // chat server clientkey
  clientKey: "fangho_imkit_0412_2018_001_clientkey",
  // chat user token，選填，若不填則需填 authBase 與 authClientId
  token: "",
  // 訊息解密金鑰
  privateKey: "",
  // S3 bucketName
  bucketName: "chatserver-upload",
  // google api key，需要啟用 Maps JavaScript API, Maps Static API, Geocoding API
  googleApiKey: "AIzaSyCimtHXyW8GfZ50Vx_YcFFmaBu7G2Wm2cw",
  // app logo，顯示在聊天列表上方，appLogo 及 appName 都填時，logo在左邊
  appLogo: "https://i.imgur.com/gchEcBi.png",
  // app name，顯示在聊天列表上方，appLogo 及 appName 都填時，name在右邊
  appName: "",
  // 語系 'zh-tw' or 'en'
  lang: "zh-tw",
  // 取得 avatar 需要的 headers
  avatarHeaders: [
    // {
    //   name: 'token',
    //   // 'variable' or 'stable'
    //   type: 'variable',
    //   // 變數名稱或固定的值
    //   value: 'token'
    // },
    // {
    //   name: 'stableValue',
    //   // 'variable' or 'stable'
    //   type: 'stable',
    //   // 變數名稱或固定的值
    //   value: 'testStable'
    // }
  ],
  // 下載檔案時要帶的 headers
  downloadFileHeaders: [
    // {
    //   name: 'Authorization',
    //   // 'variable' or 'stable'
    //   type: 'variable',
    //   // 變數名稱或固定的值
    //   value: 'token'
    // }
  ],
  layout: {
    // 是否顯示左側列表
    list: true,
    // 是否顯示右側資訊欄
    info: true
  },
  // 中間聊天區塊設定
  chat: {
    // 是否顯示聊天區塊的 header
    showHeader: true,
    // 下方聊天工具按鈕設定
    actions: {
      // 表情符號
      emoji: {
        // 是否啟用
        enable: true,
        mobileEnable: true,
        // 描述文字
        text: "Send Emoji"
      },
      // 貼圖
      sticker: {
        // 是否啟用
        enable: true,
        mobileEnable: true,
        // 描述文字
        text: "Send Sticker"
      },
      // 圖片
      image: {
        // 是否啟用
        enable: true,
        mobileEnable: true,
        // 描述文字
        text: "Send Image",
        extra: {
          // 限制檔案格式
          accept: [
            "image/png",
            "image/jpeg",
            "image/heic",
            "image/heic-sequence"
          ],
          // 限制檔案大小 (MB)
          limitSize: 10,
          // 縮圖的最大寬高 (px)
          thumbnailSize: 1500
        }
      },
      // 影片
      video: {
        // 是否啟用
        enable: true,
        mobileEnable: true,
        // 描述文字
        text: "Send Video",
        extra: {
          // 限制檔案格式
          accept: ["video/mp4", "video/quicktime"],
          // 限制檔案大小 (MB)
          limitSize: 100,
          // 縮圖的最大寬高 (px)
          thumbnailSize: 1500
        }
      },
      // 檔案
      file: {
        // 是否啟用
        enable: true,
        mobileEnable: true,
        // 描述文字
        text: "Send File",
        extra: {
          // 限制檔案格式
          accept: ["application/pdf", "audio/mp3"],
          // 限制檔案大小 (MB)
          limitSize: 10
        }
      },
      // 錄音
      recorder: {
        // 是否啟用
        enable: true,
        mobileEnable: true,
        // 描述文字
        text: "Send Recorder",
        extra: {
          // 限制錄音秒數
          limitSeconds: 60
        }
      },
      // 位置
      location: {
        // 是否啟用
        enable: true,
        mobileEnable: true,
        // 描述文字
        text: "Send Location"
      },
      // 金流
      paymentRequest: {
        // 是否啟用
        enable: false,
        mobileEnable: false,
        // 描述文字
        text: "Send Payment Request",
        extra: {
          // 支援的幣值
          currencies: ["TWD", "USD"],
          // 請款 API
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
    // 聊天按鈕顯示位置 'bottom' or 'right'
    actionsPosition: "bottom",
    // 限制文字長度
    limitTextLength: 500,
    // 圖片/影片檢視氣關閉方式，
    // 'close'：右上方叉叉
    // 'back'：左上方返回箭頭
    sliderReturnMode: "close",
    // 爬 url meta 時，是否使用異步讀取
    asyncUrlPreview: true,
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
        color: null
      },
      // 其他人發送的訊息
      others: {
        // 背景色
        background: null,
        // 文字顏色
        color: null
      },
      // 系統訊息
      system: {
        // 背景色
        background: null,
        // 文字顏色
        color: null
      }
    },
    // 顯示時縮圖的最大寬 (px)
    thumbnailSize: 500,
    // 是否顯示已讀
    readReceipt: true,
    // 是否開啟回覆功能
    reply: true,
    // 是否開啟轉傳功能
    forward: true,
    // 是否開啟收回訊息功能
    recall: true,
    // 是否可以下載音檔
    audioDownload: true,
    sticker: [
      {
        folder: "FunFunFamily",
        icon: "FunFunFamily-1",
        count: 40
      }
    ]
  },
  // 左側聊天列表設定
  list: {
    // 排序方式，有效值 null, 'createdTime'
    sort: null,
    // 可開啟的房間數量，設 0 不限制
    maxCount: 0,
    // 鎖定的房間顯示文字
    lockText: "",
    // 點即鎖定的房間觸發事件
    lockOnClick: function() {},
    // 自訂顏色，顏色格式：'#123456' 或 'rgba(12, 34, 56, 0.5)'
    colors: {
      // Header 顏色設定
      header: {
        // 背景色
        background: null,
        // 文字顏色
        color: null
      }
    },
    // 是否顯示成員數
    memberCount: true,
    logout: {
      // 是否顯示登出按鈕
      enable: true,
      // 登出事件
      event: function() {
        localStorage.removeItem("IMKit-token");
        document.location.href = "demo";
      }
    },
    // 是否有置頂功能
    sticky: true,
    // 是否可以建立房間
    createRoom: true
  },
  // 右側聊天資訊欄設定
  info: {
    // 自訂顏色，顏色格式：'#123456' 或 'rgba(12, 34, 56, 0.5)'
    colors: {
      // Header 顏色設定
      header: {
        // 背景色
        background: null,
        // 文字顏色
        color: null
      }
    },
    // 是否可編輯
    edit: {
      // 是否可編輯房間
      room: {
        // 是否可編輯房間名稱
        name: true,
        // 是否可編輯房間描述
        description: true,
        // 是否可編輯房間圖片
        cover: true
      },
      // 是否可建立新房間
      createRoom: true,
      // 是否可離開房間
      leave: true,
      // 是否可將其他人從房間移除
      remove: true,
      // 是否可邀請成員
      invite: true
    },
    // 是否預設開啟成員列表
    openMembersList: false,
    // 要額外顯示的資訊
    iframes: [
      // {
      //   // 標題
      //   title: 'Test',
      //   // iframe會帶入網址，並加上roomId及clientIds
      //   url: '//imkit.io/',
      //   // 是否預設開啟
      //   open: true,
      //   // 高度
      //   height: 300
      // }
    ]
  },
  // 事件們
  events: {
    // 是否執行開啟聊天的預設事件
    onSetRoomActiveDefault: true,
    // 開啟聊天室時觸發
    onSetRoomActive: null,
    // call api 失敗時的處理
    onAjaxError: function(error) {
      if (error.RC === 401) {
        window.location.href = "../demo";
      } else {
        console.error(error.RM);
      }
    }
  },
  // 若無設定 defaultRoom，是否自動進入列表第一個房間
  autoEnterRoom: true,
  // 開啟聊天室後進入的房間 (room id)
  defaultRoom: null,
  // 建立新房間可設定的資訊
  createRoom: {
    // 是否可設定房間 ID
    id: true,
    // 是否可設定房間名稱
    name: true,
    // 是否可設定房間描述
    description: true,
    // 是否可設定房間圖片
    cover: true
  },
  // 若為 true ，收到訊息時，無視聊天室靜音狀態，不發出任何提示音
  alwaysMute: false,
  // 收到訊息時是否要更改 title
  changeTitle: true,
  // 自訂的多國語
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
  // 客製功能
  special: {
    // 自訂房間描述
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
  // 推播設定 (Firebase Cloud Messaging Config)
  // 若不使用推播，則填 null
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
