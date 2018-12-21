var config = {
  // 是否開啟 debug
  debug: true,
  // chat server 位置
  domain: 'https://chat.fangho.com',
  // auth server 位置
  authBase: 'https://auth.imkit.io',
  // 登入的 chat user id，與 token 擇一使用
  authClientId: '',
  // 取得 url 預覽內容的 api 網址
  urlPreviewApi: 'https://chatkit.co/url',
  // chat server clientkey
  clientKey: 'fangho_imkit_0412_2018_001_clientkey',
  // chat user token，與 authClientId 擇一使用
  token: '',
  // S3 bucketName
  bucketName: 'chatserver-upload',
  // google api key，需要 map 取得座標地址權限
  googleApiKey: 'AIzaSyCimtHXyW8GfZ50Vx_YcFFmaBu7G2Wm2cw',
  // app logo，顯示在聊天列表上方，appLogo 及 appName 都填時，logo在左邊
  appLogo: 'https://i.imgur.com/gchEcBi.png',
  // app name，顯示在聊天列表上方，appLogo 及 appName 都填時，name在右邊
  appName: '',
  // 語系 'zh-tw' or 'en'
  lang: 'zh-tw',
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
  // 下逮檔案時要帶的 headers
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
    // 下方聊天工具按鈕設定
    actions: {
      // 表情符號
      emoji: {
        // 是否啟用
        enable: true,
        // 描述文字
        text: '傳送表情符號'
      },
      // 貼圖
      sticker: {
        // 是否啟用
        enable: true,
        // 描述文字
        text: '傳送貼圖'
      },
      // 圖片
      image: {
        // 是否啟用
        enable: true,
        // 描述文字
        text: '傳送圖片',
        extra: {
          // 限制檔案格式
          accept: ['image/png', 'image/jpeg'],
          // 限制檔案大小 (MB)
          limitSize: 5,
          // 縮圖的最大寬高 (px)
          thumbnailSize: 1500
        }
      },
      // 影片
      video: {
        // 是否啟用
        enable: true,
        // 描述文字
        text: '傳送影片',
        extra: {
          // 限制檔案格式
          accept: ['video/mp4', 'video/quicktime'],
          // 限制檔案大小 (MB)
          limitSize: 5,
          // 縮圖的最大寬高 (px)
          thumbnailSize: 1500
        }
      },
      // 檔案
      file: {
        // 是否啟用
        enable: true,
        // 描述文字
        text: '傳送檔案',
        extra: {
          // 限制檔案格式
          accept: ['application/pdf'],
          // 限制檔案大小 (MB)
          limitSize: 5
        }
      },
      // 錄音
      recorder: {
        // 是否啟用
        enable: true,
        // 描述文字
        text: '傳送語音',
        extra: {
          // 限制錄音秒數
          limitSeconds: 60
        }
      },
      // 位置
      location: {
        // 是否啟用
        enable: true,
        // 描述文字
        text: '傳送位置'
      }
    },
    // 聊天按鈕顯示位置 'bottom' or 'right'
    actionsPosition: 'bottom',
    // 限制文字長度
    limitTextLength: 100,
    // 圖片/影片檢視氣關閉方式，
    // 'close'：右上方叉叉
    // 'back'：左上方返回箭頭
    sliderReturnMode: 'close',
    // 自訂訊息框顏色，顏色格式：'#123456' 或 'rgba(12, 34, 56, 0.5)'
    colors: {
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
    forward: true
  },
  // 左側聊天列表設定
  list: {
    // 是否顯示成員數
    memberCount: true,
    logout: {
      // 是否顯示登出按鈕
      enable: true,
      // 登出事件
      event: function() {
        localStorage.removeItem('client');
        document.location.href = 'demo';
      }
    },
    createRoom: true
  },
  // 右側聊天資訊欄設定
  info: {
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
    }
  },
  // 事件們
  events: {
    // call api 失敗時的處理
    onAjaxError: error => {
      if (error.RC === 401) {
        alert(error.RM);
        window.location.href = '../demo';
      }
    }
  },
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
  // 推播設定 (Firebase Cloud Messaging Config)
  // 若不使用推播，則填 null
  FCMConfig: {
    apiKey: 'AIzaSyDH6fgpRFaH7vIqAcGQi48wgvNf8BJ9q1I',
    authDomain: 'fir-chat-server.firebaseapp.com',
    databaseURL: 'https://fir-chat-server.firebaseio.com',
    projectId: 'fir-chat-server',
    storageBucket: 'fir-chat-server.appspot.com',
    messagingSenderId: '970263218499'
  }
};
