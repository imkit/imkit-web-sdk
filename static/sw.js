// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or
// deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting
// see https://firebase.google.com/docs/web/setup

importScripts('https://www.gstatic.com/firebasejs/5.0.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.0.0/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '970263218499'
});

// const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

// chat server 丟過來的 click_action 不 OK，可是我不能複寫他...
// messaging.setBackgroundMessageHandler(function(payload) {
//   var notification = payload.notification;
//   var notificationTitle = notification.title;
//   var notificationOptions = {
//     body: notification.body,
//     icon: 'static/logo.png',
//     data: {
//       room: {
//         id: payload.data.type.split(':')[1]
//       }
//     },
//     click_action: '?room=' + payload.data.type.split(':')[1]
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });

// 只好自己寫了
self.addEventListener('push', e => {
  // 是否開啟中
  e.waitUntil(
    (async function() {
      let cs = await clients.matchAll({
        includeUncontrolled: true
      });
      if (!cs || cs.length === 0) {
        // 未開啟，處理推播
        let payload;

        if (e.data && e.data.json) {
          try {
            payload = e.data.json();
          } catch (error) {}
        }

        const notificationTitle =
          (payload.notification && payload.notification.title) || 'IMKit';

        let notificationbody = '';
        let lang = (
          navigator.language ||
          navigator.userLanguage ||
          navigator.browserLanguage ||
          navigator.systemLanguage
        ).toLowerCase();
        if (lang !== 'zh-tw') {
          lang = 'en';
        }

        let lockey = payload.data['loc-key'].split('_');
        let type = lockey[lockey.length - 1];
        switch (type) {
          case 'text':
            notificationbody = payload.notification.body;
            break;
          case 'sticker':
            notificationbody = i18n[lang]['{name} send sticker.'].replace(
              '{name}',
              notificationTitle
            );
            break;
          case 'image':
            notificationbody = i18n[lang]['{name} send image.'].replace(
              '{name}',
              notificationTitle
            );
            break;
          case 'video':
            notificationbody = i18n[lang]['{name} send video.'].replace(
              '{name}',
              notificationTitle
            );
            break;
          case 'audio':
            notificationbody = i18n[lang]['{name} send audio.'].replace(
              '{name}',
              notificationTitle
            );
            break;
          case 'file':
            notificationbody = i18n[lang]['{name} send file.'].replace(
              '{name}',
              notificationTitle
            );
            break;
          case 'location':
            notificationbody = i18n[lang]['{name} send location.'].replace(
              '{name}',
              notificationTitle
            );
            break;
          case 'recall':
            notificationbody = i18n[lang]['{name} recall a message.'].replace(
              '{name}',
              notificationTitle
            );
            break;
          case 'encrypted':
            notificationbody = i18n[lang][
              '{name} send an encrypted message.'
            ].replace('{name}', notificationTitle);
            break;
          case 'request_payment':
            notificationbody = i18n[lang][
              '{name} send a payment request.'
            ].replace('{name}', notificationTitle);
            break;
          case 'payment':
            notificationbody = i18n[lang]['{name} send a payment.'].replace(
              '{name}',
              notificationTitle
            );
            break;
        }

        if (!notificationbody) {
          return;
        }
        const notificationOptions = {
          body: notificationbody,
          icon:
            (payload.notification && payload.notification.icon) || 'logo.png',
          data: {
            room: {
              id: payload.data.type.split(':')[1]
            }
          }
        };

        e.waitUntil(
          self.registration.showNotification(
            notificationTitle,
            notificationOptions
          )
        );
      } else {
        // 開啟中，不處理
      }
    })()
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();

  e.waitUntil(
    (async function() {
      let cs = await clients.matchAll({
        includeUncontrolled: true
      });
      if (!cs || cs.length === 0) {
        clients.openWindow('../?room=' + e.notification.data.room.id);
      } else {
        cs.forEach(el => {
          if (!el.focused) {
            el.focus();
          }
          el.postMessage(e.notification.data.room.id);
        });
      }
    })()
  );
});

const i18n = {
  en: {
    OK: 'OK',
    Save: 'Save',
    Send: 'Send',
    'Sending...': 'Sending...',
    Cancel: 'Cancel',
    'No member': 'No members',
    Today: 'Today',
    Yesterday: 'Yesterday',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
    'Unknown Name': 'Unnamed User',
    '{name} invites {members} to join.': '{name} invites {members} to join',
    '{name} joined room.': '{name} joined room',
    '{sender} has removed {name}': '{sender} has removed {name}',
    '{name} leave room.': '{name} left room',
    '{name} send sticker.': '{name} send a sticker',
    '{name} send image.': '{name} send a picture',
    '{name} send video.': '{name} send a video',
    '{name} send audio.': '{name} send an audio',
    '{name} send file.': '{name} send a file',
    '{name} send location.': '{name} send a location info',
    '{name} send a payment request.': '{name} send a payment request',
    '{name} send a payment.': '{name} send a payment',
    'Unsupported message.': 'Unsupported message',
    'The following is an unread message': 'The following are unread messages',
    '{name} sends a message to you.': '{name} sends you a message',
    Search: 'Search',
    'There are currently no messages': 'No messages',
    'Create room': 'Create room',
    Create: 'Create',
    Invite: 'Invite',
    'Group ID': 'Group ID',
    'Group info': 'Group info',
    'Group name': 'Group name',
    'Group description': 'Group description',
    'Group cover': 'Group cover',
    'Group invitee': "Group invitee(userID, separated by ',')",
    'Edit group': 'Edit group',
    'Leave group': 'Leave group',
    'Create a group chat room': 'Create a group chat room',
    'Add chat room members': 'Add chat room members',
    'Create at {date}': 'Created at {date}',
    'Group ({count} people)': 'Group ({count} people)',
    'Group ({count} peoples)': 'Group ({count} people)',
    'Remove member': 'Remove member',
    'Are you sure you want to leave the group?':
      'Are you sure you want to leave the group?',
    'Are you sure you want to remove {name}?':
      'Are you sure you want to remove {name}?',
    Record: 'Record',
    'Failed to get permission': 'Failed to get permission',
    'Failed to get location': 'Failed to get location',
    'Your browser does not support geolocation':
      'Your browser does not support geolocation',
    'Type something': 'Type something ...',
    'Failed to loading group': 'Failed to load group',
    'Location Message': 'Location Message',
    'Readed {count}': 'Read {count}',
    'Unsupported file type: {filename}': 'Unsupported file type: {filename}',
    '{filename} is over {size}MB': "'{filename}' is over {size}MB",
    'Filename extension:': 'File name extension:',
    'File size:': 'File size:',
    Download: 'Download',
    'Unable to display': 'Unable to display',
    '{name} is typing': '{name} is typing ...',
    '{name} are typing': '{name} are typing ...',
    'Many people are typing': 'Many people are typing ...',
    Reply: 'Reply',
    Forward: 'Forward',
    'Resend the message?': 'Resend the message?',
    'The connection has been interrupted and an attempt is made to reconnect':
      'Connecting...',
    'Message loading ...': 'Message Loading ...',
    Sticky: 'Sticky',
    Unsticky: 'Unsticky',
    'You can not be an invitee yourself': 'You can not be an invitee yourself',
    Recall: 'Recall',
    '{name} recall a message.': '{name} recall a message',
    '{name} send an encrypted message.': '{name} send an encrypted message',
    'Payment Request': 'Payment Request',
    Currency: 'Currency',
    Amount: 'Amount',
    Note: 'Note',
    'Please enter currency and amount': 'Please enter currency and amount',
    Pay: 'Pay',
    Location: 'Location'
  },
  'zh-tw': {
    OK: '確定',
    Save: '儲存',
    Send: '傳送',
    'Sending...': '傳送中...',
    Cancel: '取消',
    'No member': '沒有成員',
    Today: '今天',
    Yesterday: '昨天',
    Monday: '星期一',
    Tuesday: '星期二',
    Wednesday: '星期三',
    Thursday: '星期四',
    Friday: '星期五',
    Saturday: '星期六',
    Sunday: '星期日',
    'Unknown Name': '(沒有名字)',
    '{name} invites {members} to join.': '{name} 邀請 {members} 加入',
    '{name} joined room.': '{name} 加入群組',
    '{sender} has removed {name}': '{name} 已讓 {name} 離開群組',
    '{name} leave room.': '{name} 離開群組',
    '{name} send sticker.': '{name} 傳送了貼圖',
    '{name} send image.': '{name} 傳送了圖片',
    '{name} send video.': '{name} 傳送了影片',
    '{name} send audio.': '{name} 傳送了錄音',
    '{name} send file.': '{name} 傳送了檔案',
    '{name} send location.': '{name} 傳送了位置',
    '{name} send a payment request.': '{name} 傳送了請款訊息',
    '{name} send a payment.': '{name} 傳送了付款訊息',
    'Unsupported message.': '{name} 傳送了格式未支援的訊息',
    'The following is an unread message': '以下為尚未閱讀的訊息',
    '{name} sends a message to you.': '{name} 傳了訊息給你',
    Search: '搜尋',
    'There are currently no messages': '目前尚無訊息',
    'Create room': '建立聊天室',
    Create: '建立',
    Invite: '邀請',
    'Group ID': '群組 ID',
    'Group info': '群組資訊',
    'Group name': '群組名稱',
    'Group description': '群組描述',
    'Group cover': '群組圖片',
    'Group invitee': "群組受邀者(userID，用','隔開)",
    'Edit group': '編輯群組',
    'Leave group': '離開群組',
    'Create a group chat room': '建立群组聊天室',
    'Add chat room members': '新增聊天室成員',
    'Create at {date}': '建立時間 {date}',
    'Group ({count} people)': '群組 ({count}人)',
    'Group ({count} peoples)': '群組 ({count}人)',
    'Remove member': '移除成員',
    'Are you sure you want to leave the group?': '確定要離開聊天室？',
    'Are you sure you want to remove {name}?': '確定要移除 {name}？',
    Record: '錄音',
    'Failed to get permission': '取得權限失敗',
    'Failed to get location': '取得位置訊息失敗',
    'Your browser does not support geolocation': '你的瀏覽器不支援位置資訊',
    'Type something': '輸入訊息 ...',
    'Failed to loading group': '載入群組失敗',
    'Location Message': '位置訊息',
    'Readed {count}': '已讀 {count}',
    'Unsupported file type: {filename}': '不支援的檔案類型: {filename}',
    '{filename} is over {size}MB': "'{filename}' 超過 {size}MB",
    'Filename extension:': '副檔名：',
    'File size:': '檔案大小：',
    Download: '下載',
    'Unable to display': '無法顯示',
    '{name} is typing': '{name} 正在輸入 ...',
    '{name} are typing': '{name} 都正在輸入 ...',
    'Many people are typing': '多人正在輸入 ...',
    Reply: '回覆',
    Forward: '轉傳',
    'Resend the message?': '重送訊息？',
    'The connection has been interrupted and an attempt is made to reconnect':
      '連線中...',
    'Message loading ...': '訊息載入中 ...',
    Sticky: '置頂',
    Unsticky: '取消置頂',
    'You can not be an invitee yourself': '你自己不能成為被邀請者',
    Recall: '收回',
    '{name} recall a message.': '{name} 撤回了一則訊息',
    '{name} send an encrypted message.': '{name} 傳送了加密訊息',
    'Payment Request': '請款',
    Currency: '幣別',
    Amount: '金額',
    Note: '備註',
    'Please enter currency and amount': '請輸入幣別及金額',
    Pay: '付款',
    Location: '位置'
  }
};
