var config = {
  debug: false,
  domain: 'https://chat.fangho.com',
  authBase: 'https://auth.imkit.io',
  authClientId: '',
  urlPreviewApi: 'https://chatkit.co/url',
  clientKey: 'fangho_imkit_0412_2018_001_clientkey',
  token: '',
  bucketName: 'chatserver-upload',
  // bucketName: 'imkit',
  googleApiKey: 'AIzaSyCimtHXyW8GfZ50Vx_YcFFmaBu7G2Wm2cw',
  appName: 'IMKit Demo',
  lang: 'zh-tw',
  // lang: 'en',
  layout: {
    list: true,
    info: true
  },
  chat: {
    actions: {
      emoji: {
        enable: true,
        text: '傳送表情符號'
      },
      sticker: {
        enable: true,
        text: '傳送貼圖'
      },
      image: {
        enable: true,
        text: '傳送圖片',
        extra: {
          accept: ['image/png', 'image/jpeg'],
          limitSize: 5
        }
      },
      video: {
        enable: true,
        text: '傳送影片',
        extra: {
          accept: ['video/mp4', 'video/quicktime'],
          limitSize: 5
        }
      },
      file: {
        enable: true,
        text: '傳送檔案',
        extra: {
          accept: ['application/pdf'],
          limitSize: 5
        }
      },
      recorder: {
        enable: true,
        text: '傳送語音',
        extra: {
          limitSeconds: 60
        }
      },
      location: {
        enable: true,
        text: '傳送位置'
      }
    },
    actionsPosition: 'bottom', // bottom or right
    limitTextLength: 20,
    sliderReturnMode: 'close', // back or close
    colors: {
      self: {
        background: null,
        color: null
      },
      others: {
        background: null,
        color: null
      },
      system: {
        background: null,
        color: null
      }
    },
    readReceipt: true, // 是否顯示已讀
    reply: true // 是否開啟回覆功能
  },
  list: {
    memberCount: true // 是否顯示成員數
  },
  info: {
    edit: {
      room: {
        name: true,
        description: true,
        cover: true
      },
      leave: true,
      remove: true
    }
  },
  defaultRoom: null,
  FCMConfig: {
    apiKey: 'AIzaSyDH6fgpRFaH7vIqAcGQi48wgvNf8BJ9q1I',
    authDomain: 'fir-chat-server.firebaseapp.com',
    databaseURL: 'https://fir-chat-server.firebaseio.com',
    projectId: 'fir-chat-server',
    storageBucket: 'fir-chat-server.appspot.com',
    messagingSenderId: '970263218499'
  } // Firebase Cloud Messaging Config
};
